# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.generics import ListAPIView

from question.models import Question

from question.serializers import QuestionChoicesSerializer


class AllQuestionsAPIView(ListAPIView):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = QuestionChoicesSerializer

    def get_queryset(self):
        return Question.objects.all()
