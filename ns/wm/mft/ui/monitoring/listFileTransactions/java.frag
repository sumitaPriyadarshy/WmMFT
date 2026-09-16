<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">listFileTransactions</value>
  <array name="sig" type="value" depth="1">
    <value>[i] field:0:optional invokeDoQuery {"true","false"}</value>
    <value>[i] field:0:optional archiveDB {"false","true"}</value>
    <value>[i] recref:0:optional searchCreteria wm.mft.ui.rec:doQuerySerachInput</value>
    <value>[i] field:0:required queryId</value>
    <value>[i] field:0:required pageNumber</value>
    <value>[i] field:0:optional queryIdToCancel</value>
    <value>[o] field:0:required threadRunning</value>
    <value>[o] field:0:required rowsRead</value>
    <value>[o] record:1:required events</value>
    <value>[o] - field:0:required transactionID</value>
    <value>[o] - field:0:required fileName</value>
    <value>[o] - field:0:required transferStatus</value>
    <value>[o] - field:0:required fileSize</value>
    <value>[o] - field:0:required userAuthId</value>
    <value>[o] - field:0:required senderName</value>
    <value>[o] - field:0:required receiverName</value>
    <value>[o] - field:0:required transactionDate</value>
    <value>[o] - field:0:required comments</value>
    <value>[o] - field:0:required serverName</value>
    <value>[o] - field:0:required transferTime</value>
    <value>[o] - field:0:required userIP</value>
    <value>[o] - field:0:required protocol</value>
    <value>[o] - field:0:required transactionType</value>
    <value>[o] - field:0:required transferSpeed</value>
    <value>[o] - field:0:required compressFlag</value>
    <value>[o] - field:0:required relatedTransactionID</value>
    <value>[o] - field:0:required triggerSource</value>
    <value>[o] - field:0:required sourcePath</value>
    <value>[o] - field:0:required destinationPath</value>
    <value>[o] field:0:required status</value>
    <value>[o] field:0:required message</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">CmJvb2xlYW4gc3VjY2VzcyA9IHRydWU7ClN0cmluZyBtZXNzYWdlID0gIiI7CnRyeSB7CglSQkFQ
cm94eS52YWxpZGF0ZVNlc3Npb24oUkJBVWlIYW5kbGUuTE9HX1RSQU5TQUNUSU9OKTsKCVN0cmlu
ZyBkZWZhdWx0U29ydENvbHVtbiA9ICJUcmFuc2FjdGlvbkRhdGUiOwoJU3RyaW5nIHJlc3VsdENv
bHVtbnNbXSA9IG5ldyBTdHJpbmcgW10geyJUcmFuc2FjdGlvbklEIiwgIkZpbGVOYW1lIiwgIlRy
YW5zZmVyU3RhdHVzIiwgIkZpbGVTaXplIiwgIlVzZXJBdXRoSUQiLCAiUGFydG5lck5hbWUiLCAi
UGFydG5lck5hbWUiLCAiVHJhbnNhY3Rpb25EYXRlIiwgIkNvbW1lbnRzIiwKCQkJIlNlcnZlck5h
bWUiLCAiVHJhbnNmZXJUaW1lIiwgIlVzZXJJUCIsICJQcm90b2NvbCIsICJUcmFuc2FjdGlvblR5
cGUiLCAiVHJhbnNmZXJTcGVlZCIsICJDb21wcmVzc0ZsYWciLCAiUmVsYXRlZFRyYW5zYWN0aW9u
SUQiLCAiVHJpZ2dlclNvdXJjZSIsICJTb3VyY2VQYXRoIiwgIkRlc3RpbmF0aW9uUGF0aCJ9OwoK
CVN0cmluZyBwYXJ0bmVySWQgPSBSQkFQcm94eS52YWxpZGF0ZVNlc3Npb25BbmRHZXRQYXJ0bmVy
U3RyaW5nKCk7CgoJSURhdGEgc2VhcmNoQ3JpdGVyaWEgPSAoSURhdGEpIFZhbHVlc0VtdWxhdG9y
LmdldChwaXBlbGluZSwgInNlYXJjaENyZXRlcmlhIik7CglJRGF0YVtdIGZpZWxkcyA9IChJRGF0
YVtdKSBWYWx1ZXNFbXVsYXRvci5nZXQoc2VhcmNoQ3JpdGVyaWEsICJmaWVsZHMiKTsKCWlmKGZp
ZWxkcyA9PSBudWxsKQoJewoJCWZpZWxkcyA9IG5ldyBJRGF0YVsxXTsKCQlmaWVsZHNbMF0gPSBJ
RGF0YUZhY3RvcnkuY3JlYXRlKCk7CgkJVmFsdWVzRW11bGF0b3IucHV0KGZpZWxkc1swXSwgImZp
ZWxkTmFtZSIsICJQYXJ0bmVyQWNjZXNzSWRzIik7CgkJVmFsdWVzRW11bGF0b3IucHV0KGZpZWxk
c1swXSwgInZhbHVlIiwgcGFydG5lcklkKTsKCQlWYWx1ZXNFbXVsYXRvci5wdXQoZmllbGRzWzBd
LCAib3BlcmF0b3IiLCAiQ09OVEFJTlMiKTsKCQlWYWx1ZXNFbXVsYXRvci5wdXQoc2VhcmNoQ3Jp
dGVyaWEsICJmaWVsZHMiLCBmaWVsZHMpOwoJfQoJZWxzZQoJewoJCUlEYXRhW10gbmV3RmllbGRz
ID0gbmV3IElEYXRhW2ZpZWxkcy5sZW5ndGggKyAxXTsKCQlpbnQgY291bnQgPSAwOwoJCWZvcihJ
RGF0YSBmaWVsZCA6IGZpZWxkcykKCQl7CgkJCW5ld0ZpZWxkc1tjb3VudCsrXSA9IGZpZWxkOwoJ
CX0KCQlJRGF0YSBwYXJ0bmVyQWNjZXNzID0gSURhdGFGYWN0b3J5LmNyZWF0ZSgpOwoJCVZhbHVl
c0VtdWxhdG9yLnB1dChwYXJ0bmVyQWNjZXNzLCAiZmllbGROYW1lIiwgIlBhcnRuZXJBY2Nlc3NJ
ZHMiKTsKCQlWYWx1ZXNFbXVsYXRvci5wdXQocGFydG5lckFjY2VzcywgInZhbHVlIiwgcGFydG5l
cklkKTsKCQlWYWx1ZXNFbXVsYXRvci5wdXQocGFydG5lckFjY2VzcywgIm9wZXJhdG9yIiwgIkNP
TlRBSU5TIik7CgoJCW5ld0ZpZWxkc1tjb3VudF0gPSBwYXJ0bmVyQWNjZXNzOwoKCQlWYWx1ZXNF
bXVsYXRvci5wdXQoc2VhcmNoQ3JpdGVyaWEsICJmaWVsZHMiLCBuZXdGaWVsZHMpOwoJfQoKCgoJ
cXVlcmllcy5leGVjdXRlUXVlcnkgKHBpcGVsaW5lLCByZXN1bHRDb2x1bW5zLCBNRlREYXRhQ29u
c3RhbnRzLlFVRVJZX1RZUEVfVFJBTlNBQ1RJT04sIGRlZmF1bHRTb3J0Q29sdW1uKTsKCQp9IGNh
dGNoIChFeGNlcHRpb24gdCkgewoJc3VjY2VzcyA9IGZhbHNlOwoJbWVzc2FnZSA9IHQuZ2V0TG9j
YWxpemVkTWVzc2FnZSgpOwp9IGZpbmFsbHkgewoJVmFsdWVzRW11bGF0b3IucHV0KHBpcGVsaW5l
LCAic3VjY2VzcyIsIFN0cmluZy52YWx1ZU9mKHN1Y2Nlc3MpKTsKCVZhbHVlc0VtdWxhdG9yLnB1
dChwaXBlbGluZSwgIm1lc3NhZ2UiLCBtZXNzYWdlKTsKfQo=</value>
</Values>
