FROM centos

RUN yum install -y java

VOLUME /tmp
ADD /backend/target/cqrs-example.jar cqrs.jar
RUN sh -c 'touch /cqrs.jar'
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom","-jar","/cqrs.jar"]