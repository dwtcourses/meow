import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Table, ConfigProvider } from "antd";

import moment from "moment";
import "./styles.css";
import config from "../../config";

const NoPosts = () => (
  <div
    style={{
      textAlign: "center"
    }}
  >
    <img
      width="12%"
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/crying-cat-face_1f63f.png"
      alt="Crying Cat"
    />
    <h3>No Posts This Day</h3>
  </div>
);

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* current visible columns */
      columns: this.truncateColumns()
    };
  }

  truncateColumns = () => {
    if (this.props.device === config.MOBILE) {
      return this.columns.filter(x => x.key === "section" || x.key === "slug");
    }

    return this.columns;
  };

  columns = [
    {
      key: "section",
      title: "section",
      dataIndex: "section",
      className: "section",
      sortDirections: ["ascend", "descend"],
      render: text =>
        text && this.props.sections
          ? this.props.sections.find(x => x.id === text).name
          : "No Section",
      sorter: (a, b) => a.section - b.section
    },
    {
      key: "slug",
      title: "slug",
      dataIndex: "slug",
      className: "slug",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.slug.localeCompare(b.slug)
    },
    {
      key: "post_twitter",
      title: "tweet",
      dataIndex: "post_twitter",
      className: "twitter",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.post_twitter.localeCompare(b.post_twitter)
    },
    {
      key: "post_facebook",
      title: "facebook",
      dataIndex: "post_facebook",
      className: "facebook",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.post_facebook.localeCompare(b.post_facebook)
    },
    {
      key: "pub_time",
      title: "post time",
      dataIndex: "pub_time",
      className: "pub_time",
      sortDirections: ["ascend", "descend"],
      defaultSortOrder: "descend",
      sorter: (a, b) => a.pub_time < b.pub_time,
      render: text => (text ? moment(text, "HH:mm:ss").format("hh:mm a") : "No Time")
    },
    {
      key: "status",
      title: "status",
      dataIndex: "status",
      className: "status",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) =>
        b.pub_ready_copy - a.pub_ready_copy ||
        b.pub_ready_online - a.pub_ready_online ||
        b.sent - a.sent ||
        b.sending - a.sending ||
        new Date(b.pub_time) - new Date(a.pub_time) ||
        b.id - a.id,
      render: (text, record) => {
        if (record.sending) {
          return "Sending";
        }
        if (record.sent) {
          return "Sent";
        }
        if (record.pub_ready_copy) {
          if (record.pub_ready_online) {
            return "Ready to post";
          }
          return "Copy-Edited";
        }
        if (record.sent_error) {
          return "Error";
        }
        return "Draft";
      }
    }
  ];

  render() {
    return (
      <ConfigProvider renderEmpty={NoPosts}>
        <div id="meow-table-wrapper">
          <Table
            pagination={false}
            className="post-table"
            rowKey="id"
            dataSource={this.props.data}
            columns={this.state.columns}
            onRowClick={record => this.props.history.push(`/edit/${record.id}`)}
            rowClassName={record => {
              if (record.sent_error) return "sent-error";
              if (record.sending) return "sending";
              if (record.sent) return "sent";
              if (record.pub_ready_copy) {
                if (record.pub_ready_online) return "ready-to-post";
                return "copy-edited";
              }
              return "draft";
            }}
          />
        </div>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.default.section.sections,
  device: state.default.mobile.device
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Posts)
);
