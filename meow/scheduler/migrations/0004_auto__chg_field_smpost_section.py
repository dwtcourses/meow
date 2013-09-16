# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):

        # Changing field 'SMPost.section'
        db.alter_column(u'scheduler_smpost', 'section_id', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['scheduler.Section'], null=True))

    def backwards(self, orm):

        # User chose to not deal with backwards NULL issues for 'SMPost.section'
        raise RuntimeError("Cannot reverse this migration. 'SMPost.section' and its values cannot be restored.")
        
        # The following code is provided here to aid in writing a correct migration
        # Changing field 'SMPost.section'
        db.alter_column(u'scheduler_smpost', 'section_id', self.gf('django.db.models.fields.related.ForeignKey')(to=orm['scheduler.Section']))

    models = {
        u'scheduler.meowsetting': {
            'Meta': {'object_name': 'MeowSetting'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'setting_key': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '100'}),
            'setting_value': ('django.db.models.fields.CharField', [], {'max_length': '500'})
        },
        u'scheduler.section': {
            'Meta': {'object_name': 'Section'},
            'also_post_to': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['scheduler.Section']", 'null': 'True', 'blank': 'True'}),
            'facebook_account_handle': ('django.db.models.fields.CharField', [], {'max_length': '100', 'null': 'True', 'blank': 'True'}),
            'facebook_key': ('django.db.models.fields.CharField', [], {'max_length': '500', 'null': 'True', 'blank': 'True'}),
            'facebook_page_id': ('django.db.models.fields.CharField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'twitter_access_key': ('django.db.models.fields.CharField', [], {'max_length': '500', 'null': 'True', 'blank': 'True'}),
            'twitter_access_secret': ('django.db.models.fields.CharField', [], {'max_length': '500', 'null': 'True', 'blank': 'True'}),
            'twitter_account_handle': ('django.db.models.fields.CharField', [], {'max_length': '100', 'null': 'True', 'blank': 'True'})
        },
        u'scheduler.smpost': {
            'Meta': {'object_name': 'SMPost'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'post_facebook': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'post_twitter': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'pub_date': ('django.db.models.fields.DateField', [], {'null': 'True', 'blank': 'True'}),
            'pub_ready_copy': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'pub_ready_online': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'pub_time': ('django.db.models.fields.TimeField', [], {'null': 'True', 'blank': 'True'}),
            'section': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['scheduler.Section']", 'null': 'True', 'blank': 'True'}),
            'sent': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'sent_error': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'sent_error_text': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'sent_time': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.CharField', [], {'max_length': '100', 'null': 'True'}),
            'story_url': ('django.db.models.fields.URLField', [], {'max_length': '500', 'null': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['scheduler']