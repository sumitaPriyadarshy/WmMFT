<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">listAuditLogs</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:optional invokeDoQuery {"true","false"}</value>
    <value>[i] recref:0:optional searchCreteria wm.mft.ui.rec:doQuerySerachInput</value>
    <value>[i] field:0:required queryId</value>
    <value>[i] field:0:required pageNumber</value>
    <value>[i] field:0:optional queryIdToCancel</value>
    <value>[o] field:0:required threadRunning</value>
    <value>[o] field:0:required rowsRead</value>
    <value>[o] record:1:required events</value>
    <value>[o] - field:0:required auditLogID</value>
    <value>[o] - field:0:required assetID</value>
    <value>[o] - field:0:required eventName</value>
    <value>[o] - field:0:required assetType</value>
    <value>[o] - field:0:required actionType</value>
    <value>[o] - field:0:required user</value>
    <value>[o] - field:0:required briefMessage</value>
    <value>[o] - field:0:required auditTime</value>
    <value>[o] field:0:required status</value>
    <value>[o] field:0:required message</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">CmJvb2xlYW4gc3VjY2VzcyA9IHRydWU7ClN0cmluZyBtZXNzYWdlID0gIiI7CnRyeSB7CglSQkFQ
cm94eS52YWxpZGF0ZVNlc3Npb24oUkJBVWlIYW5kbGUuTE9HX0FVRElUKTsKCVN0cmluZyBkZWZh
dWx0U29ydENvbHVtbiA9ICJFbnRyeVRpbWVzdGFtcCI7CglTdHJpbmcgcmVzdWx0Q29sdW1uc1td
ID0gbmV3IFN0cmluZyBbXSB7IkF1ZGl0TG9nSWQiLCJBc3NldE5hbWUiLCJBc3NldFR5cGUiLCJB
dWRpdEFjdGlvbiIsIkF1ZGl0VXNlciIsIkJyaWVmTWVzc2FnZSIsIkVudHJ5VGltZXN0YW1wIn07
CglxdWVyaWVzLmV4ZWN1dGVRdWVyeSAocGlwZWxpbmUsIHJlc3VsdENvbHVtbnMsIE1GVERhdGFD
b25zdGFudHMuUVVFUllfVFlQRV9BVURJVF9MT0csIGRlZmF1bHRTb3J0Q29sdW1uKTsKCQp9IGNh
dGNoIChFeGNlcHRpb24gdCkgewoJc3VjY2VzcyA9IGZhbHNlOwoJbWVzc2FnZSA9IHQuZ2V0TG9j
YWxpemVkTWVzc2FnZSgpOwp9IGZpbmFsbHkgewoJVmFsdWVzRW11bGF0b3IucHV0KHBpcGVsaW5l
LCAic3VjY2VzcyIsIFN0cmluZy52YWx1ZU9mKHN1Y2Nlc3MpKTsKCVZhbHVlc0VtdWxhdG9yLnB1
dChwaXBlbGluZSwgIm1lc3NhZ2UiLCBtZXNzYWdlKTsKfQo=</value>
</Values>
