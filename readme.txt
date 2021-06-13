In order to run the code You need to do following steps:

Step 1:Setup httpd Webserver:

>> yum install httpd

#Try only if unable to connect
>> vim /etc/httpd/conf/httpd.conf

<Directory />
    Options FollowSymLinks
    AllowOverride None
    Order deny,allow
    Deny from all
</Directory>

>> systemctl start httpd
>> systemctl stop firewalld

#Selinux stops to access pages from outside linux
>> setenforce 0

Step 2: Copy the files:

1. You have to copy files of html dir to..
>> /var/www/html/

2. You have to copy files of cgi_bin dir to..
>> /var/www/cgi-bin/

Step 3: Run it on the web browser:

To do that you need to know your system ip address..
>>ifconfig enp0s3
copy the ip

now, open chrome or any other web browser..
In the Url section, type
http://192.168.225.54/b_shell.html

note: In your case ip will be diffrent.