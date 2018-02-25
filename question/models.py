# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from question.managers import QuestionManager


class Question(models.Model):
    text = models.TextField()
    correct_choice = models.ForeignKey('QuestionAlternative',
                                       related_name='correct_choice',
                                       null=True, blank=True,
                                       on_delete=models.CASCADE,)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = QuestionManager()


class QuestionAlternative(models.Model):
    question = models.ForeignKey(Question,
                                 related_name='question_choices',
                                 on_delete=models.CASCADE)
    text = models.TextField()
    letter = models.CharField(max_length=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('question', 'letter')

    def __unicode__(self):
        return u'{} - {}) {}'.format(self.id, self.letter, self.text)


class FreeQuestion(models.Model):
    question = models.OneToOneField(Question, on_delete=models.CASCADE)
    order = models.PositiveSmallIntegerField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
