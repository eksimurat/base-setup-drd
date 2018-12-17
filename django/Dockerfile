 FROM python:3.7.0
 ENV PYTHONUNBUFFERED 1
 RUN mkdir /backend
 WORKDIR /backend
 ADD ./django/requirements.txt /backend/
 ADD django-entrypoint.sh /backend/
 RUN pip install -r requirements.txt
 RUN chmod +x django-entrypoint.sh
 ADD . /backend/