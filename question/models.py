# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Question(models.Model):
    text = models.TextField()
    correct_choice = models.ForeignKey('QuestionChoice', related_name='correct_choice', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class QuestionChoice(models.Model):
    question = models.ForeignKey(Question, related_name='question_choices')
    text = models.TextField()
    letter = models.CharField(max_length=1)

    class Meta:
        unique_together = ('question', 'letter')