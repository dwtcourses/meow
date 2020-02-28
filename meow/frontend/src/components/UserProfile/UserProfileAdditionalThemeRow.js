import React from "react";
import "./styling.css";
import { connect } from "react-redux";
import { editUser } from "../../actions/user";
<<<<<<< HEAD
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
=======
import { Icon } from "antd";
>>>>>>> Implemented Theme Favorite and Unfavorite functions

class UserProfileAdditionalThemeRow extends React.Component {
  render() {
    return (
      <div class="user-profile-theme-row-row-with-nav">
        <div
          className={`user-profile-theme-row${this.props.active ? "-active" : ""}`}
          onClick={this.setAsCurrentTheme}
        >
          {this.createHandOrGap()}
          <span className="user-profile-theme-row-name">{this.props.theme.name}</span>
          <div
            className="user-profile-theme-dot"
            style={{ backgroundColor: this.props.theme.primary }}
          />
          <div
            className="user-profile-theme-dot"
            style={{ backgroundColor: this.props.theme.secondary }}
          />
          <div
            className="user-profile-theme-dot"
            style={{ backgroundColor: this.props.theme.primary_font_color }}
          />
          <div
            className="user-profile-theme-dot"
            style={{ backgroundColor: this.props.theme.secondary_font_color }}
          />
          <div
            className="user-profile-theme-dot"
            style={{ backgroundColor: this.props.theme.tertiary }}
          />
        </div>

        <div className={"user-profile-theme-row-star"}>{this.starSelected()}</div>
      </div>
    );
  }

  setAsCurrentTheme = () => {
    if (this.props.canEdit) {
      console.log(this.props.editUser);
      //this will trigger the api call and update the redux state and cause a rerender.
      this.props.editUser({ selected_theme: this.props.theme });
    }
  };

  createHandOrGap = () => {
    if (this.props.active) {
      return <img src="/static/other/bongocat.png" className="user-profile-theme-row-hand" />;
    } else {
      return <span className="user-profile-theme-row-hand" />;
    }
  };

  starSelected = () => {
    console.log("Count: ");
    console.log(this.props.theme.favorite_count);
    if (this.props.starred === true) {
<<<<<<< HEAD
      if (this.props.theme.favorite_count >= 5) {
        return (
          <div
            onClick={() => {
              this.props.unstarfavoriteTheme(this.props.theme);
              console.log("clicked_star");
            }}
          >
            <MdFavorite
              style={{
                marginTop: 11,
                fontSize: 30,
                color: "#d94a4a"
              }}
            />
          </div>
        );
      } else {
        return (
          <div
=======
      return (
        <div>
          <Icon
            type="star"
            style={{
              fontSize: 40,
              color: "#d9c400",
              borderRadius: 200
            }}
>>>>>>> Implemented Theme Favorite and Unfavorite functions
            onClick={() => {
              this.props.unstarfavoriteTheme(this.props.theme);
              console.log("clicked_star");
            }}
          >
<<<<<<< HEAD
            <FaStar
              style={{
                marginTop: 11,
                fontSize: 30,
                color: "#e6cf00"
              }}
            />
          </div>
        );
      }
    } else {
      return (
        <div
          onClick={() => {
            this.props.starfavoriteTheme(this.props.theme);
            console.log("clicked_star");
          }}
        >
          <FaRegStar
            style={{
              marginTop: 11,
              fontSize: 30,
              color: "#cfcfcf"
            }}
          />
=======
            <p>{this.props.theme.favorite_count}</p>
          </Icon>
          <p style={{ marginTop: -29, marginLeft: 12 }}>{this.props.theme.favorite_count}</p>
        </div>
      );
    } else {
      return (
        <div>
          <Icon
            type="star"
            style={{
              fontSize: 29,
              color: "black",
              borderRadius: 200
            }}
            onClick={() => {
              this.props.starfavoriteTheme(this.props.theme);
              console.log("clicked_star");
            }}
          />
          <p style={{ marginTop: -29, marginLeft: 12 }}>{this.props.theme.favorite_count}</p>
>>>>>>> Implemented Theme Favorite and Unfavorite functions
        </div>
      );
    }
  };
}

const mapDispatchToProps = {
  editUser: data => editUser(data)
};

export default connect(
  null,
  mapDispatchToProps
)(UserProfileAdditionalThemeRow);
