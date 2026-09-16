<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">listVfsFilePurgeLogs</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:optional invokeDoQuery {"true","false"}</value>
    <value>[i] recref:0:optional searchCreteria wm.mft.ui.rec:doQuerySerachInput</value>
    <value>[i] field:0:required queryId</value>
    <value>[i] field:0:required pageNumber</value>
    <value>[i] field:0:optional queryIdToCancel</value>
    <value>[o] field:0:required threadRunning</value>
    <value>[o] field:0:required rowsRead</value>
    <value>[o] record:1:required filePurgeLogs</value>
    <value>[o] - field:0:required purgeID</value>
    <value>[o] - field:0:required vfsID</value>
    <value>[o] - field:0:required vfsPath</value>
    <value>[o] - field:0:required vfsName</value>
    <value>[o] - field:0:required retentionDays</value>
    <value>[o] - field:0:required purgedFileCount</value>
    <value>[o] - field:0:required totalFileCount</value>
    <value>[o] - field:0:required startTime</value>
    <value>[o] - field:0:required endTime</value>
    <value>[o] - field:0:required status</value>
    <value>[o] field:0:required status</value>
    <value>[o] field:0:required message</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">CmJvb2xlYW4gc3VjY2VzcyA9IHRydWU7ClN0cmluZyBtZXNzYWdlID0gIiI7CnRyeSB7CglSQkFQ
cm94eS52YWxpZGF0ZVNlc3Npb24oUkJBVWlIYW5kbGUuTE9HX0ZJTEVfUFVSR0UpOwoJU3RyaW5n
IGRlZmF1bHRTb3J0Q29sdW1uID0gIlN0YXJ0VGltZSI7CglTdHJpbmcgcmVzdWx0Q29sdW1uc1td
ID0gbmV3IFN0cmluZ1tdIHsgIlB1cmdlSUQiLCAiVkZTSUQiLCAiVkZTUGF0aCIsICJWRlNOYW1l
IiwgIlJldGVudGlvbkRheXMiLAoJCQkiUHVyZ2VkRmlsZUNvdW50IiwgIlRvdGFsRmlsZUNvdW50
IiwgIlN0YXJ0VGltZSIsICJFbmRUaW1lIiwgIlN0YXR1cyIgfTsKCXF1ZXJpZXMuZXhlY3V0ZVF1
ZXJ5IChwaXBlbGluZSwgcmVzdWx0Q29sdW1ucywgTUZURGF0YUNvbnN0YW50cy5RVUVSWV9UWVBF
X1ZGU19GSUxFX1BVUkdFLCBkZWZhdWx0U29ydENvbHVtbik7CgkKfSBjYXRjaCAoRXhjZXB0aW9u
IHQpIHsKCXN1Y2Nlc3MgPSBmYWxzZTsKCW1lc3NhZ2UgPSB0LmdldExvY2FsaXplZE1lc3NhZ2Uo
KTsKfSBmaW5hbGx5IHsKCVZhbHVlc0VtdWxhdG9yLnB1dChwaXBlbGluZSwgInN1Y2Nlc3MiLCBT
dHJpbmcudmFsdWVPZihzdWNjZXNzKSk7CglWYWx1ZXNFbXVsYXRvci5wdXQocGlwZWxpbmUsICJt
ZXNzYWdlIiwgbWVzc2FnZSk7Cn0K</value>
</Values>
