# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Question, QuestionAlternative

class QuestionAlternativeInline(admin.TabularInline):
    model = QuestionAlternative

class QuestionAdmin(admin.ModelAdmin):
    raw_id_fields = ['correct_choice']
    inlines = [
        QuestionAlternativeInline,
    ]

admin.site.register(Question, QuestionAdmin)
admin.site.register(QuestionAlternative)