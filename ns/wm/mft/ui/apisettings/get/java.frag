<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">get</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:required cloudMode</value>
    <value>[o] record:0:required output</value>
    <value>[o] - field:0:optional batchSize</value>
    <value>[o] - field:0:optional rateLimit</value>
    <value>[o] - record:0:required hammering</value>
    <value>[o] -- record:0:required connection</value>
    <value>[o] --- field:0:required maxAttempts</value>
    <value>[o] --- field:0:required attemptPeriodSeconds</value>
    <value>[o] --- field:0:required banDurationSeconds</value>
    <value>[o] -- record:0:required password</value>
    <value>[o] --- field:0:required maxAttempts</value>
    <value>[o] --- field:0:required attemptPeriodSeconds</value>
    <value>[o] --- field:0:required banDurationSeconds</value>
    <value>[o] - record:1:required ipRestrictions</value>
    <value>[o] -- field:0:required id</value>
    <value>[o] -- field:0:required action</value>
    <value>[o] -- field:0:required ipFrom</value>
    <value>[o] -- field:0:required ipTo</value>
    <value>[o] - record:1:required bannedIps</value>
    <value>[o] -- field:0:required ipAddress</value>
    <value>[o] -- field:0:required userId</value>
    <value>[o] -- field:0:required banTime</value>
    <value>[o] -- field:0:required unbanTime</value>
    <value>[o] -- field:0:required banReason</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">CklEYXRhQ3Vyc29yIGN1cnNvciA9IHBpcGVsaW5lLmdldEN1cnNvcigpOwp0cnkgewoJLy8gVmFs
aWRhdGUgc2Vzc2lvbiBhbmQgcGVybWlzc2lvbnMKCVJCQVByb3h5LnZhbGlkYXRlU2Vzc2lvbihS
QkFVaUhhbmRsZS5BUElfU0VUVElOR1NfVklFVyk7CgkKCS8vIEdldCBpbnB1dCBwYXJhbWV0ZXIK
CVN0cmluZyBjbG91ZE1vZGVTdHIgPSBWYWx1ZXNFbXVsYXRvci5nZXRTdHJpbmcocGlwZWxpbmUs
ICJjbG91ZE1vZGUiKTsKCWJvb2xlYW4gY2xvdWRNb2RlID0gQm9vbGVhbi5wYXJzZUJvb2xlYW4o
Y2xvdWRNb2RlU3RyKTsKCQoJLy8gQnVpbGQgb3V0cHV0IHN0cnVjdHVyZQoJSURhdGEgb3V0cHV0
ID0gSURhdGFGYWN0b3J5LmNyZWF0ZSgpOwoJSURhdGFDdXJzb3Igb3V0cHV0Q3Vyc29yID0gb3V0
cHV0LmdldEN1cnNvcigpOwoJCgkvLyBPbmx5IGluY2x1ZGUgYmF0Y2ggc2l6ZSBhbmQgcmF0ZSBs
aW1pdCBpZiBOT1QgY2xvdWQgbW9kZQoJaWYgKCFjbG91ZE1vZGUpIHsKCQlpbnQgYmF0Y2hTaXpl
ID0gQXBpU2V0dGluZ3NQcm94eS5nZXRDdXJyZW50QmF0Y2hTaXplKCk7CgkJaW50IHJhdGVMaW1p
dCA9IEFwaVNldHRpbmdzUHJveHkuZ2V0Q3VycmVudFJhdGVMaW1pdCgpOwoJCW91dHB1dEN1cnNv
ci5pbnNlcnRBZnRlcigiYmF0Y2hTaXplIiwgYmF0Y2hTaXplKTsKCQlvdXRwdXRDdXJzb3IuaW5z
ZXJ0QWZ0ZXIoInJhdGVMaW1pdCIsIHJhdGVMaW1pdCk7Cgl9CgkKCS8vIEJ1aWxkIGhhbW1lcmlu
ZyBjb25maWcgKGFsd2F5cyBpbmNsdWRlZCkKCUlEYXRhIGhhbW1lcmluZyA9IGJ1aWxkSGFtbWVy
aW5nQ29uZmlnKCk7CglvdXRwdXRDdXJzb3IuaW5zZXJ0QWZ0ZXIoImhhbW1lcmluZyIsIGhhbW1l
cmluZyk7CgkKCS8vIEJ1aWxkIElQIHJlc3RyaWN0aW9ucyAoYWx3YXlzIGluY2x1ZGVkKQoJSURh
dGFbXSBpcFJlc3RyaWN0aW9ucyA9IGJ1aWxkSXBSZXN0cmljdGlvbnMoKTsKCW91dHB1dEN1cnNv
ci5pbnNlcnRBZnRlcigiaXBSZXN0cmljdGlvbnMiLCBpcFJlc3RyaWN0aW9ucyk7CgkKCS8vIEJ1
aWxkIGJhbm5lZCBJUHMgKGFsd2F5cyBpbmNsdWRlZCkKCUlEYXRhW10gYmFubmVkSXBzID0gYnVp
bGRCYW5uZWRJcHMoKTsKCW91dHB1dEN1cnNvci5pbnNlcnRBZnRlcigiYmFubmVkSXBzIiwgYmFu
bmVkSXBzKTsKCQoJb3V0cHV0Q3Vyc29yLmRlc3Ryb3koKTsKCWN1cnNvci5pbnNlcnRBZnRlcigi
b3V0cHV0Iiwgb3V0cHV0KTsKCQp9IGNhdGNoIChFeGNlcHRpb24gZSkgewoJdGhyb3cgbmV3IFNl
cnZpY2VFeGNlcHRpb24oIkZhaWxlZCB0byByZXRyaWV2ZSBBUEkgc2V0dGluZ3M6ICIgKyBlLmdl
dE1lc3NhZ2UoKSk7Cn0gZmluYWxseSB7CgljdXJzb3IuZGVzdHJveSgpOwp9Cgo=</value>
</Values>
