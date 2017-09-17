from rest_framework import serializers

from question.models import Question, QuestionChoice

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'text', 'correct_choice')


class QuestionChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionChoice
        fields = ('id', 'text', 'letter')


class QuestionChoicesSerializer(QuestionSerializer):
    question_choices = QuestionChoiceSerializer(read_only=True, many=True)
    class Meta:
        model = Question
        fields = ('id', 'text', 'correct_choice', 'question_choices')