# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from lead.models import UserLead


@admin.register(UserLead)
class UserLeadAdmin(admin.ModelAdmin):
    list_display = ('email', 'id')
    search_fields = ('email',)
    ordering = ('-id',)
