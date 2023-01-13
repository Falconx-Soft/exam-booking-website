import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

sender = 'cedemi8519@themesw.com'
rec = 'cedemi8519@themesw.com'

s = smtplib.SMTP('smtp.gmail.com', 587)
s.starttls()
s.login("","")
message = MIMEMultipart('alternative')
message['subject'] = 'link'
message['from'] = 'sender'
message['to'] = 'rec'

text = "hey! i want to send you an emial"
html = """/
<html>
<head>
</head>
<body>
<p>here is some great</p>
</body>
</html>
"""
textPart = MIMEMultipart(text,'plain')
htmlPart = MIMEMultipart(html, 'html')
message.attach(textPart, htmlPart)
s.sendmail('cedemi8519@themesw.com', 'cedemi8519@themesw.com', message.as_string())
s.quit()