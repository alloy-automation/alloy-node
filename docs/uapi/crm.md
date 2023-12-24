# Commerce SDK Documentation

## Overview

Aloy Unified API prpvides a client for interacting with our [Unified CRM model](https://docs-uapi.runalloy.com/reference/list-accounts). It includes methods for managing Accounts, Contacts, Leads, Notes, Tasks, and Opportunities.

## Authentication

All requests to the CRM API require an API key for authentication.


```javascript
const apiClient = new UAPI("YOUR_API_KEY");
await apiClient.connect("connectionId");
```

## Methods

### Accounts

#### Create an Account

Example:

```javascript
const body = {
  accountName: "Mojica",
};
const data = await apiClient.CRM.createAccount(body);
const accountId = data.account.id;
```

#### Get All Accounts

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const data = await apiClient.CRM.getAllAccounts();
```

#### Get Account Count

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const count = await apiClient.CRM.getAccountCount();
```

#### Get an Account

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const accountId = 'abc123';
const account = await apiClient.CRM.getAccount(accountId);
```

#### Update an Account

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const accountId = 'abc123';
const updatedData = {
  accountName: 'Updated Name',
};
const updatedAccount = await apiClient.CRM.updateAccount(accountId, updatedData);
```

#### Delete an Account

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const accountId = 'abc123';
await apiClient.CRM.deleteAccount(accountId);
```

### Contacts

#### Create a Contact

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const body = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
};
const data = await apiClient.CRM.createContact(body);
const contactId = data.contact.id;
```

#### Get All Contacts

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const data = await apiClient.CRM.getAllContacts();
```

#### Get Contacts Count

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const count = await apiClient.CRM.getContactCount();
```

#### Get a Contact

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const contactId = 'def456';
const contact = await apiClient.CRM.getContact(contactId);
```

#### Update a Contact

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const contactId = 'def456';
const updatedData = {
  lastName: 'UpdatedLastName',
};
const updatedContact = await apiClient.CRM.updateContact(contactId, updatedData);
```

#### Delete a Contact

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const contactId = 'def456';
await apiClient.CRM.deleteContact(contactId);
```

### Leads

#### Create a Lead

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const body = {
  firstName: 'LeadFirst',
  lastName: 'LeadLast',
  email: 'lead@example.com',
};
const data = await apiClient.CRM.createLead(body);
const leadId = data.lead.id;
```

#### Get All Leads

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const data = await apiClient.CRM.getAllLeads();
```

#### Get Leads Count

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const count = await apiClient.CRM.getLeadCount();
```

#### Get a Lead

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const leadId = 'ghi789';
const lead = await apiClient.CRM.getLead(leadId);
```

#### Update a Lead

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const leadId = 'ghi789';
const updatedData = {
  company: 'UpdatedCompany',
};
const updatedLead = await apiClient.CRM.updateLead(leadId, updatedData);
```

#### Delete a Lead

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const leadId = 'ghi789';
await apiClient.CRM.deleteLead(leadId);
```

### Notes

#### Create a Note

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const body = {
  title: 'Meeting Notes',
  content: 'Discussed upcoming features.',
};
const data = await apiClient.CRM.createNote(body);
const noteId = data.note.id;
```

#### Get All Notes

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const data = await apiClient.CRM.getAllNotes();
```

#### Get Notes Count

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const count = await apiClient.CRM.getNoteCount();
```

#### Get a Note

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const noteId = 'jkl012';
const note = await apiClient.CRM.getNote(noteId);
```

#### Update a Note

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const noteId = 'jkl012';
const updatedData = {
  content: 'Updated content.',
};
const updatedNote = await apiClient.CRM.updateNote(noteId, updatedData);
```

#### Delete a Note

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const noteId = 'jkl012';
await apiClient.CRM.deleteNote(noteId);
```

### Tasks

#### Create a Task

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const body = {
 

 title: 'Follow-up Call',
  description: 'Call the client to discuss the proposal.',
};
const data = await apiClient.CRM.createTask(body);
const taskId = data.task.id;
```

#### Get All Tasks

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const data = await apiClient.CRM.getAllTasks();
```

#### Get Tasks Count

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const count = await apiClient.CRM.getTaskCount();
```

#### Get a Task

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const taskId = 'mno345';
const task = await apiClient.CRM.getTask(taskId);
```

#### Update a Task

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const taskId = 'mno345';
const updatedData = {
  description: 'Updated description.',
};
const updatedTask = await apiClient.CRM.updateTask(taskId, updatedData);
```

#### Delete a Task

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const taskId = 'mno345';
await apiClient.CRM.deleteTask(taskId);
```

### Opportunities

#### Create an Opportunity

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const body = {
  opportunityName: 'New Opportunity',
  amount: 5000,
};
const data = await apiClient.CRM.createOpportunity(body);
const opportunityId = data.opportunity.id;
```

#### Get All Opportunities

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const data = await apiClient.CRM.getAllOpportunities();
```

#### Get Opportunities Count

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const count = await apiClient.CRM.getOpportunityCount();
```

#### Get an Opportunity

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const opportunityId = 'pqr678';
const opportunity = await apiClient.CRM.getOpportunity(opportunityId);
```

#### Update an Opportunity

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const opportunityId = 'pqr678';
const updatedData = {
  amount: 7000,
};
const updatedOpportunity = await apiClient.CRM.updateOpportunity(opportunityId, updatedData);
```

#### Delete an Opportunity

Example:

```javascript
const apiClient = new UAPI(apiKey);
await apiClient.connect(connectionId);

const opportunityId = 'pqr678';
await apiClient.CRM.deleteOpportunity(opportunityId);
```
