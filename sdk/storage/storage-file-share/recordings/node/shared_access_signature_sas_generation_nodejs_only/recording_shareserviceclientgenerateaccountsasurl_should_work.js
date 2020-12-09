let nock = require('nock');

module.exports.hash = "c388b4e421e70813b8c5488474e34e61";

module.exports.testInfo = {"uniqueName":{},"newDate":{"now":"2020-12-05T07:34:37.580Z","tmr":"2020-12-05T07:34:37.581Z"}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\"><Shares><Share><Name>1share-with-dash160499408198505661</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:41:21 GMT</Last-Modified><Etag>\"0x8D8854C04F354D6\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:41:21 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499404947703881</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:40:49 GMT</Last-Modified><Etag>\"0x8D8854BF1AB9D3A\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:40:49 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499405019907317</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:40:50 GMT</Last-Modified><Etag>\"0x8D8854BF205AB20\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:40:50 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499405584001730</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:40:55 GMT</Last-Modified><Etag>\"0x8D8854BF55DE71A\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:40:55 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499406160803835</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:41:01 GMT</Last-Modified><Etag>\"0x8D8854BF8CDBB50\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:41:01 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499406167309760</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:41:01 GMT</Last-Modified><Etag>\"0x8D8854BF8D7F658\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:41:01 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499408022609425160499408024502985</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:41:20 GMT</Last-Modified><Etag>\"0x8D8854C03E97E81\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:41:20 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499414498200549</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:25 GMT</Last-Modified><Etag>\"0x8D8854C2A842E34\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:25 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499414699808982</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:27 GMT</Last-Modified><Etag>\"0x8D8854C2BB5A891\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:27 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499415315000770</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:33 GMT</Last-Modified><Etag>\"0x8D8854C2F5DD506\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:33 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499415359806397</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:33 GMT</Last-Modified><Etag>\"0x8D8854C2FA23DC6\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:33 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499415997704552</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:39 GMT</Last-Modified><Etag>\"0x8D8854C336F86D0\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:39 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499416003400284</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:40 GMT</Last-Modified><Etag>\"0x8D8854C33780AA6\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:40 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499416153108512</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:41 GMT</Last-Modified><Etag>\"0x8D8854C345C9DE0\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:41 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499416162004912</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:42:41 GMT</Last-Modified><Etag>\"0x8D8854C346A3580\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:42:41 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499418079806229160499418081708637</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:43:00 GMT</Last-Modified><Etag>\"0x8D8854C3FDB61A8\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:43:00 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share><Share><Name>share160499418423501577160499418426801569</Name><Properties><Last-Modified>Tue, 10 Nov 2020 07:43:04 GMT</Last-Modified><Etag>\"0x8D8854C41E9D1D6\"</Etag><Quota>5120</Quota><AccessTier>TransactionOptimized</AccessTier><AccessTierChangeTime>Tue, 10 Nov 2020 07:43:04 GMT</AccessTierChangeTime><DefaultEncryptionScope>$account-encryption-key</DefaultEncryptionScope><DenyEncryptionScopeOverride>false</DenyEncryptionScopeOverride></Properties></Share></Shares><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '21061e75-201a-0079-1bd9-caa9d9000000',
  'x-ms-client-request-id',
  '492c451c-68cb-439e-9d41-3ac52357dec1',
  'x-ms-version',
  '2020-02-10',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Sat, 05 Dec 2020 07:34:38 GMT'
]);