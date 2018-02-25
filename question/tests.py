# -*- coding: utf-8 -*-
from django.test import TestCase

from question.models import Question, FreeQuestion

from model_mommy import mommy


class QuestionTestCase(TestCase):

    def test_get_free_questions(self):
        """ Questions that can speak are correctly identified. """
        paid_questions = mommy.make(Question, _quantity=3)
        free_questions = mommy.make(Question, _quantity=2)

        FreeQuestion.objects.create(question=free_questions[0], order=1)
        FreeQuestion.objects.create(question=free_questions[1], order=2)

        self.assertEqual(2, Question.objects.free().count())

    def test_free_questions_order(self):
        free_questions = mommy.make(Question, _quantity=2)

        FreeQuestion.objects.create(question=free_questions[0], order=1)
        FreeQuestion.objects.create(question=free_questions[1], order=2)

        expected_qs = Question.objects.filter(
                                                freequestion__isnull=False
                                            ).order_by(
                                                'freequestion__order'
                                            )

        self.assertQuerysetEqual(expected_qs, Question.objects.free(),
                                 ordered=True, transform=lambda question: question)
