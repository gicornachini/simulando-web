from rest_framework import serializers

from question.models import Question, QuestionAlternative

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'text', 'correct_choice')


class QuestionAlternativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAlternative
        fields = ('id', 'text', 'letter')


class QuestionAlternativesSerializer(QuestionSerializer):
    """ Used to list question with their respective available choices. """

    question_choices = QuestionAlternativeSerializer(read_only=True, many=True)
    class Meta:
        model = Question
        fields = ('id', 'text', 'correct_choice', 'question_choices')