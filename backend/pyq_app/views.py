from rest_framework.response import Response
from rest_framework.views import APIView

class DepartmentList(APIView):
    def get(self, request):
        departments = ["Computer Science", "Mathematics", "Electrical"]
        return Response({"departments": departments})