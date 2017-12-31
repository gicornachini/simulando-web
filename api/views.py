# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from question.models import Question
from lead.models import UserLead

from question.serializers import QuestionAlternativesSerializer
from lead.serializers import UserLeadSerializer


class QuestionList(ListAPIView):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = QuestionAlternativesSerializer

    def get_queryset(self):
        return Question.objects.all().prefetch_related('question_choices')


class UserLeadList(APIView):
    """
    Create a new UserLead.
    """

    def post(self, request, format=None):
        serializer = UserLeadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
