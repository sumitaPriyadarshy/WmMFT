<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">listAgentEventLogs</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:optional invokeDoQuery {"true","false"}</value>
    <value>[i] field:0:optional archiveDB {"false","true"}</value>
    <value>[i] recref:0:optional searchCreteria wm.mft.ui.rec:doQuerySerachInput</value>
    <value>[i] field:0:required queryId</value>
    <value>[i] field:0:required pageNumber</value>
    <value>[i] field:0:optional queryIdToCancel</value>
    <value>[o] field:0:required threadRunning</value>
    <value>[o] field:0:required rowsRead</value>
    <value>[o] record:1:required agentEvents</value>
    <value>[o] - field:0:required eventLogID</value>
    <value>[o] - field:0:required eventID</value>
    <value>[o] - field:0:required eventName</value>
    <value>[o] - field:0:required scheduledTime</value>
    <value>[o] - field:0:required scheduledTimeZone</value>
    <value>[o] - field:0:required eventEnd</value>
    <value>[o] - field:0:required status</value>
    <value>[o] - field:0:required timeOfExecution</value>
    <value>[o] field:0:required status</value>
    <value>[o] field:0:required message</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">CmJvb2xlYW4gc3VjY2VzcyA9IHRydWU7ClN0cmluZyBtZXNzYWdlID0gIiI7CnRyeSB7CglSQkFQ
cm94eS52YWxpZGF0ZVNlc3Npb24oUkJBVWlIYW5kbGUuTE9HX0FHRU5UX0FDVElPTik7CglTdHJp
bmcgZGVmYXVsdFNvcnRDb2x1bW4gPSAiVGltZU9mRXhlY3V0aW9uIjsKCVN0cmluZyByZXN1bHRD
b2x1bW5zW10gPSBuZXcgU3RyaW5nIFtdIHsiRXZlbnRMb2dJRCIsICJFdmVudElEIiwgIkV2ZW50
TmFtZSIsICJTY2hlZHVsZWRUaW1lIiwgIlNjaGVkdWxlZFRpbWVab25lIiwgIkV2ZW50RW5kIiwg
IlN0YXR1cyIsICJUaW1lT2ZFeGVjdXRpb24ifTsKCXF1ZXJpZXMuZXhlY3V0ZVF1ZXJ5IChwaXBl
bGluZSwgcmVzdWx0Q29sdW1ucywgTUZURGF0YUNvbnN0YW50cy5RVUVSWV9UWVBFX0FHRU5UX0VW
RU5UX01PTklUT1JJTkdfTE9HLCBkZWZhdWx0U29ydENvbHVtbik7CgkKfSBjYXRjaCAoRXhjZXB0
aW9uIHQpIHsKCXN1Y2Nlc3MgPSBmYWxzZTsKCW1lc3NhZ2UgPSB0LmdldExvY2FsaXplZE1lc3Nh
Z2UoKTsKfSBmaW5hbGx5IHsKCVZhbHVlc0VtdWxhdG9yLnB1dChwaXBlbGluZSwgInN1Y2Nlc3Mi
LCBTdHJpbmcudmFsdWVPZihzdWNjZXNzKSk7CglWYWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUs
ICJtZXNzYWdlIiwgbWVzc2FnZSk7Cn0K</value>
</Values>
