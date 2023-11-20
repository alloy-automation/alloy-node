import { UAPI } from "../index.mjs";
import { apiKey, salesforceConnectionId } from "../utils";
const { v4: uuidv4 } = require("uuid");

describe("Salesforce Accounts", () => {
  let accountId;

  test("should create an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      accountName: "Mojica",
    };
    let data = await apiClient.CRM.createAccount(body);
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("description");
    expect(data.account).toHaveProperty("industry");
    expect(data.account).toHaveProperty("website");
    expect(data.account).toHaveProperty("numberOfEmployees");
    expect(data.account).toHaveProperty("addresses");
    expect(data.account).toHaveProperty("phoneNumbers");
    expect(data.account).toHaveProperty("lastActivityAt");
    expect(data.account).toHaveProperty("createdTimestamp");
    expect(data.account).toHaveProperty("updatedTimestamp");
    expect(data.account).toHaveProperty("id");
    accountId = data.account.id;
  });

  test("should get all accounts", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.listAccounts();

    expect(data.accounts[0]).toBeDefined();
    expect(data.accounts[0]).toHaveProperty("remoteId");
    expect(data.accounts[0]).toHaveProperty("accountName");
    expect(data.accounts[0]).toHaveProperty("description");
    expect(data.accounts[0]).toHaveProperty("industry");
    expect(data.accounts[0]).toHaveProperty("website");
    expect(data.accounts[0]).toHaveProperty("numberOfEmployees");
    expect(data.accounts[0]).toHaveProperty("addresses");
    expect(data.accounts[0]).toHaveProperty("phoneNumbers");
    expect(data.accounts[0]).toHaveProperty("lastActivityAt");
    expect(data.accounts[0]).toHaveProperty("createdTimestamp");
    expect(data.accounts[0]).toHaveProperty("updatedTimestamp");
    expect(data.accounts[0]).toHaveProperty("id");
  });

  test("should get account count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getAccountsCount();

    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should get account", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getAccount(accountId);
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("description");
    expect(data.account).toHaveProperty("industry");
    expect(data.account).toHaveProperty("website");
    expect(data.account).toHaveProperty("numberOfEmployees");
    expect(data.account).toHaveProperty("addresses");
    expect(data.account).toHaveProperty("phoneNumbers");
    expect(data.account).toHaveProperty("lastActivityAt");
    expect(data.account).toHaveProperty("createdTimestamp");
    expect(data.account).toHaveProperty("updatedTimestamp");
    expect(data.account).toHaveProperty("id");
  });

  test("should update an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      industry: "Government/Military",
      description: "Hello",
    };

    let data = await apiClient.CRM.updateAccount(accountId, body);
    expect(data.account).toBeDefined();
    expect(data.account).toHaveProperty("remoteId");
    expect(data.account).toHaveProperty("accountName");
    expect(data.account).toHaveProperty("description");
    expect(data.account).toHaveProperty("industry");
    expect(data.account).toHaveProperty("website");
    expect(data.account).toHaveProperty("numberOfEmployees");
    expect(data.account).toHaveProperty("addresses");
    expect(data.account).toHaveProperty("phoneNumbers");
    expect(data.account).toHaveProperty("lastActivityAt");
    expect(data.account).toHaveProperty("createdTimestamp");
    expect(data.account).toHaveProperty("updatedTimestamp");
    expect(data.account).toHaveProperty("id");
  });

  test("should delete an account", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.deleteAccount(accountId);
    expect(data).toBeDefined();
  });
});

describe("Salesforce Contacts", () => {
  let contactId;

  test("should create a contact", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      firstName: "Gregg",
      lastName: "Mojica",
    };
    let data = await apiClient.CRM.createContact(body);
    expect(data.contact).toBeDefined();
    expect(data.contact).toHaveProperty("remoteId");
    expect(data.contact).toHaveProperty("firstName");
    expect(data.contact).toHaveProperty("lastName");
    expect(data.contact).toHaveProperty("account");
    expect(data.contact).toHaveProperty("addresses");
    expect(data.contact).toHaveProperty("emailAddresses");
    expect(data.contact).toHaveProperty("phoneNumbers");
    expect(data.contact).toHaveProperty("lastActivityAt");
    expect(data.contact).toHaveProperty("createdTimestamp");
    expect(data.contact).toHaveProperty("updatedTimestamp");
    expect(data.contact).toHaveProperty("id");
    contactId = data.contact.id;
  });

  test("should get all contacts", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.listContacts();

    expect(data.contacts[0]).toBeDefined();
    expect(data.contacts[0]).toHaveProperty("remoteId");
    expect(data.contacts[0]).toHaveProperty("firstName");
    expect(data.contacts[0]).toHaveProperty("lastName");
    expect(data.contacts[0]).toHaveProperty("account");
    expect(data.contacts[0]).toHaveProperty("addresses");
    expect(data.contacts[0]).toHaveProperty("emailAddresses");
    expect(data.contacts[0]).toHaveProperty("phoneNumbers");
    expect(data.contacts[0]).toHaveProperty("lastActivityAt");
    expect(data.contacts[0]).toHaveProperty("createdTimestamp");
    expect(data.contacts[0]).toHaveProperty("updatedTimestamp");
    expect(data.contacts[0]).toHaveProperty("id");
  });

  test("should get contacts count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getContactsCount();

    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  });

  test("should get a contact", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getContact(contactId);
    expect(data.contact).toBeDefined();
    expect(data.contact).toHaveProperty("remoteId");
    expect(data.contact).toHaveProperty("firstName");
    expect(data.contact).toHaveProperty("lastName");
    expect(data.contact).toHaveProperty("account");
    expect(data.contact).toHaveProperty("addresses");
    expect(data.contact).toHaveProperty("emailAddresses");
    expect(data.contact).toHaveProperty("phoneNumbers");
    expect(data.contact).toHaveProperty("lastActivityAt");
    expect(data.contact).toHaveProperty("createdTimestamp");
    expect(data.contact).toHaveProperty("updatedTimestamp");
    expect(data.contact).toHaveProperty("id");
    expect(data.contact.firstName).toEqual("Gregg");
  });

  test("should update a contact", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      addresses: [
        {
          country: "United States",
          street1: "6649 N Blue Gum St",
          state: "LA",
          city: "New Orleans",
          addressType: "mailing",
          postalCode: "70116",
        },
      ],
    };

    let data = await apiClient.CRM.updateContact(contactId, body);
    expect(data.contact).toBeDefined();
    expect(data.contact).toHaveProperty("remoteId");
    expect(data.contact).toHaveProperty("firstName");
    expect(data.contact).toHaveProperty("lastName");
    expect(data.contact).toHaveProperty("account");
    expect(data.contact).toHaveProperty("addresses");
    expect(data.contact).toHaveProperty("emailAddresses");
    expect(data.contact).toHaveProperty("phoneNumbers");
    expect(data.contact).toHaveProperty("lastActivityAt");
    expect(data.contact).toHaveProperty("createdTimestamp");
    expect(data.contact).toHaveProperty("updatedTimestamp");
    expect(data.contact).toHaveProperty("id");
  });

  test("should delete a contact", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.deleteContact(contactId);
    expect(data).toBeDefined();
  });
});

describe("Salesforce Leads", () => {
  let leadId;

  test("should create a lead", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      lastName: "Mojica",
      company: "Alloy",
    };
    let data = await apiClient.CRM.createLead(body);
    expect(data.lead).toBeDefined();
    expect(data.lead).toHaveProperty("remoteId");
    expect(data.lead).toHaveProperty("leadOwner");
    expect(data.lead).toHaveProperty("leadSource");
    expect(data.lead).toHaveProperty("leadTitle");
    expect(data.lead).toHaveProperty("company");
    expect(data.lead).toHaveProperty("firstName");
    expect(data.lead).toHaveProperty("lastName");
    expect(data.lead).toHaveProperty("addresses");
    expect(data.lead).toHaveProperty("emailAddresses");
    expect(data.lead).toHaveProperty("phoneNumbers");
    expect(data.lead).toHaveProperty("createdTimestamp");
    expect(data.lead).toHaveProperty("updatedTimestamp");
    expect(data.lead).toHaveProperty("id");
    leadId = data.lead.id;
  },30000);

  test("should get all leads", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.listLeads();

    expect(data.leads[0]).toBeDefined();
    expect(data.leads[0]).toHaveProperty("remoteId");
    expect(data.leads[0]).toHaveProperty("leadOwner");
    expect(data.leads[0]).toHaveProperty("leadSource");
    expect(data.leads[0]).toHaveProperty("leadTitle");
    expect(data.leads[0]).toHaveProperty("company");
    expect(data.leads[0]).toHaveProperty("firstName");
    expect(data.leads[0]).toHaveProperty("lastName");
    expect(data.leads[0]).toHaveProperty("addresses");
    expect(data.leads[0]).toHaveProperty("emailAddresses");
    expect(data.leads[0]).toHaveProperty("phoneNumbers");
    expect(data.leads[0]).toHaveProperty("createdTimestamp");
    expect(data.leads[0]).toHaveProperty("updatedTimestamp");
    expect(data.leads[0]).toHaveProperty("id");
  },30000);

  test("should get leads count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getLeadsCount();

    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  },30000);

  test("should get a lead", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getLead(leadId);
    expect(data.lead).toBeDefined();
    expect(data.lead).toHaveProperty("remoteId");
    expect(data.lead).toHaveProperty("leadOwner");
    expect(data.lead).toHaveProperty("leadSource");
    expect(data.lead).toHaveProperty("leadTitle");
    expect(data.lead).toHaveProperty("company");
    expect(data.lead).toHaveProperty("firstName");
    expect(data.lead).toHaveProperty("lastName");
    expect(data.lead).toHaveProperty("addresses");
    expect(data.lead).toHaveProperty("emailAddresses");
    expect(data.lead).toHaveProperty("phoneNumbers");
    expect(data.lead).toHaveProperty("createdTimestamp");
    expect(data.lead).toHaveProperty("updatedTimestamp");
    expect(data.lead).toHaveProperty("id");
  },30000);

  test("should update a lead", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      addresses: [
        {
          country: "United States",
          street1: "6649 N Blue Gum St",
          state: "LA",
          city: "New Orleans",
          addressType: "main",
          postalCode: "70116",
        },
      ],
    };

    let data = await apiClient.CRM.updateLead(leadId, body);
    expect(data.lead).toBeDefined();
    expect(data.lead).toHaveProperty("remoteId");
    expect(data.lead).toHaveProperty("leadOwner");
    expect(data.lead).toHaveProperty("leadSource");
    expect(data.lead).toHaveProperty("leadTitle");
    expect(data.lead).toHaveProperty("company");
    expect(data.lead).toHaveProperty("firstName");
    expect(data.lead).toHaveProperty("lastName");
    expect(data.lead).toHaveProperty("addresses");
    expect(data.lead).toHaveProperty("emailAddresses");
    expect(data.lead).toHaveProperty("phoneNumbers");
    expect(data.lead).toHaveProperty("createdTimestamp");
    expect(data.lead).toHaveProperty("updatedTimestamp");
    expect(data.lead).toHaveProperty("id");
  },30000);

  test("should delete a contact", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.deleteLead(leadId);
    expect(data).toBeDefined();
  },30000);
});

describe("Salesforce Notes", () => {
  let noteId, contactId;

  test("should create a note", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let createContactBody = {
      firstName: "Gregg",
      lastName: "W Mojica",
    };
    let contactData = await apiClient.CRM.createContact(createContactBody);
    contactId = contactData.contact.id;

    let body = {
      noteContent: "From UAPI",
      noteTitle: "test",
      noteContact: contactId,
    };
    let data = await apiClient.CRM.createNote(body);
    expect(data.note).toBeDefined();
    expect(data.note).toHaveProperty("remoteId");
    expect(data.note).toHaveProperty("noteOwner");
    expect(data.note).toHaveProperty("noteTitle");
    expect(data.note).toHaveProperty("noteContent");
    expect(data.note).toHaveProperty("noteContact");
    expect(data.note).toHaveProperty("noteAccount");
    expect(data.note).toHaveProperty("noteOpportunity");
    expect(data.note).toHaveProperty("createdTimestamp");
    expect(data.note).toHaveProperty("updatedTimestamp");
    expect(data.note).toHaveProperty("id");

    noteId = data.note.id;
  },30000);

  test("should get all notes", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.listNotes();

    expect(data.notes[0]).toBeDefined();
    expect(data.notes[0]).toHaveProperty("remoteId");
    expect(data.notes[0]).toHaveProperty("noteOwner");
    expect(data.notes[0]).toHaveProperty("noteTitle");
    expect(data.notes[0]).toHaveProperty("noteContent");
    expect(data.notes[0]).toHaveProperty("noteContact");
    expect(data.notes[0]).toHaveProperty("noteAccount");
    expect(data.notes[0]).toHaveProperty("noteOpportunity");
    expect(data.notes[0]).toHaveProperty("createdTimestamp");
    expect(data.notes[0]).toHaveProperty("updatedTimestamp");
    expect(data.notes[0]).toHaveProperty("id");
  },30000);

  test("should get notes count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getNotesCount();

    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  },30000);

  test("should get a note", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getNote(noteId);
    expect(data.note).toBeDefined();
    expect(data.note).toHaveProperty("remoteId");
    expect(data.note).toHaveProperty("noteOwner");
    expect(data.note).toHaveProperty("noteTitle");
    expect(data.note).toHaveProperty("noteContent");
    expect(data.note).toHaveProperty("noteContact");
    expect(data.note).toHaveProperty("noteAccount");
    expect(data.note).toHaveProperty("noteOpportunity");
    expect(data.note).toHaveProperty("createdTimestamp");
    expect(data.note).toHaveProperty("updatedTimestamp");
    expect(data.note).toHaveProperty("id");
  },30000);

  test("should update a note", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      noteContent: "From UAPI Updated Again",
    };

    let data = await apiClient.CRM.updateNote(noteId, body);
    expect(data.note).toBeDefined();
    expect(data.note).toHaveProperty("remoteId");
    expect(data.note).toHaveProperty("noteOwner");
    expect(data.note).toHaveProperty("noteTitle");
    expect(data.note).toHaveProperty("noteContent");
    expect(data.note).toHaveProperty("noteContact");
    expect(data.note).toHaveProperty("noteAccount");
    expect(data.note).toHaveProperty("noteOpportunity");
    expect(data.note).toHaveProperty("createdTimestamp");
    expect(data.note).toHaveProperty("updatedTimestamp");
    expect(data.note).toHaveProperty("id");
  },30000);

  test("should delete a note", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.deleteNote(noteId);
    expect(data).toBeDefined();
  },30000);
});

describe("Salesforce Tasks", () => {
  let taskId;

  test("should create a task", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);

    let body = {
      taskSubject: "Mappings",
    };
    let data = await apiClient.CRM.createTask(body);
    expect(data.task).toBeDefined();
    expect(data.task).toHaveProperty("remoteId");
    expect(data.task).toHaveProperty("taskSubject");
    expect(data.task).toHaveProperty("taskContent");
    expect(data.task).toHaveProperty("taskOwner");
    expect(data.task).toHaveProperty("taskOpportunity");
    expect(data.task).toHaveProperty("completedDate");
    expect(data.task).toHaveProperty("dueDate");
    expect(data.task).toHaveProperty("taskStatus");
    expect(data.task).toHaveProperty("createdTimestamp");
    expect(data.task).toHaveProperty("updatedTimestamp");
    expect(data.task).toHaveProperty("id");

    taskId = data.task.id;
  },30000);

  test("should get all tasks", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.listTasks();

    expect(data.tasks[0]).toBeDefined();
    expect(data.tasks[0]).toHaveProperty("remoteId");
    expect(data.tasks[0]).toHaveProperty("taskSubject");
    expect(data.tasks[0]).toHaveProperty("taskContent");
    expect(data.tasks[0]).toHaveProperty("taskOwner");
    expect(data.tasks[0]).toHaveProperty("taskOpportunity");
    expect(data.tasks[0]).toHaveProperty("completedDate");
    expect(data.tasks[0]).toHaveProperty("dueDate");
    expect(data.tasks[0]).toHaveProperty("taskStatus");
    expect(data.tasks[0]).toHaveProperty("createdTimestamp");
    expect(data.tasks[0]).toHaveProperty("updatedTimestamp");
    expect(data.tasks[0]).toHaveProperty("id");
  },30000);

  test("should get tasks count", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getTasksCount();

    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  },30000);

  test("should get a task", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getTask(taskId);
    expect(data.task).toBeDefined();
    expect(data.task).toHaveProperty("remoteId");
    expect(data.task).toHaveProperty("taskSubject");
    expect(data.task).toHaveProperty("taskContent");
    expect(data.task).toHaveProperty("taskOwner");
    expect(data.task).toHaveProperty("taskOpportunity");
    expect(data.task).toHaveProperty("completedDate");
    expect(data.task).toHaveProperty("dueDate");
    expect(data.task).toHaveProperty("taskStatus");
    expect(data.task).toHaveProperty("createdTimestamp");
    expect(data.task).toHaveProperty("updatedTimestamp");
    expect(data.task).toHaveProperty("id");
  },30000);

  test("should update a task", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      taskContent: "Task Content",
    };

    let data = await apiClient.CRM.updateTask(taskId, body);
    expect(data.task).toBeDefined();
    expect(data.task).toHaveProperty("remoteId");
    expect(data.task).toHaveProperty("taskSubject");
    expect(data.task).toHaveProperty("taskContent");
    expect(data.task).toHaveProperty("taskOwner");
    expect(data.task).toHaveProperty("taskOpportunity");
    expect(data.task).toHaveProperty("completedDate");
    expect(data.task).toHaveProperty("dueDate");
    expect(data.task).toHaveProperty("taskStatus");
    expect(data.task).toHaveProperty("createdTimestamp");
    expect(data.task).toHaveProperty("updatedTimestamp");
    expect(data.task).toHaveProperty("id");
  },30000);

  test("should delete a task", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.deleteTask(taskId);
    expect(data).toBeDefined();
  },30000);
});

describe("Salesforce Opportunities", () => {
  let opportunityId;

  test("should create an opportunity", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);

    let body = {
      opportunityName: "UAPI 1",
      opportunityStage: "appointmentscheduled",
      closeDate: "2023-11-17",
    };
    let data = await apiClient.CRM.createOpportunity(body);
    expect(data.opportunity).toBeDefined();
    expect(data.opportunity).toHaveProperty("remoteId");
    expect(data.opportunity).toHaveProperty("opportunityName");
    expect(data.opportunity).toHaveProperty("opportunityDescription");
    expect(data.opportunity).toHaveProperty("amount");
    expect(data.opportunity).toHaveProperty("opportunityOwner");
    expect(data.opportunity).toHaveProperty("opportunityAccount");
    expect(data.opportunity).toHaveProperty("opportunityStage");
    expect(data.opportunity).toHaveProperty("opportunityStatus");
    expect(data.opportunity).toHaveProperty("closeDate");
    expect(data.opportunity).toHaveProperty("createdTimestamp");
    expect(data.opportunity).toHaveProperty("updatedTimestamp");
    expect(data.opportunity).toHaveProperty("lastActivityAt");
    expect(data.opportunity).toHaveProperty("id");

    opportunityId = data.opportunity.id;
  },30000);

  test("should get all opportunities", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.listOpportunities();

    expect(data.opportunities[0]).toBeDefined();
    expect(data.opportunities[0]).toHaveProperty("remoteId");
    expect(data.opportunities[0]).toHaveProperty("opportunityName");
    expect(data.opportunities[0]).toHaveProperty("opportunityDescription");
    expect(data.opportunities[0]).toHaveProperty("amount");
    expect(data.opportunities[0]).toHaveProperty("opportunityOwner");
    expect(data.opportunities[0]).toHaveProperty("opportunityAccount");
    expect(data.opportunities[0]).toHaveProperty("opportunityStage");
    expect(data.opportunities[0]).toHaveProperty("opportunityStatus");
    expect(data.opportunities[0]).toHaveProperty("closeDate");
    expect(data.opportunities[0]).toHaveProperty("createdTimestamp");
    expect(data.opportunities[0]).toHaveProperty("updatedTimestamp");
    expect(data.opportunities[0]).toHaveProperty("lastActivityAt");
    expect(data.opportunities[0]).toHaveProperty("id");
  },30000);

  test("should get an opportunity", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getOpportunitiesCount();

    expect(data).toBeDefined();
    expect(data).toHaveProperty("count");
  },30000);

  test("should get an opportunity", async () => {
    const apiClient = new UAPI(apiKey);
    apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.getOpportunity(opportunityId);
    expect(data.opportunity).toBeDefined();
    expect(data.opportunity).toHaveProperty("remoteId");
    expect(data.opportunity).toHaveProperty("opportunityName");
    expect(data.opportunity).toHaveProperty("opportunityDescription");
    expect(data.opportunity).toHaveProperty("amount");
    expect(data.opportunity).toHaveProperty("opportunityOwner");
    expect(data.opportunity).toHaveProperty("opportunityAccount");
    expect(data.opportunity).toHaveProperty("opportunityStage");
    expect(data.opportunity).toHaveProperty("opportunityStatus");
    expect(data.opportunity).toHaveProperty("closeDate");
    expect(data.opportunity).toHaveProperty("createdTimestamp");
    expect(data.opportunity).toHaveProperty("updatedTimestamp");
    expect(data.opportunity).toHaveProperty("lastActivityAt");
    expect(data.opportunity).toHaveProperty("id");
  },30000);

  test("should update a opportunity", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let body = {
      opportunityName: "UAPI 2",
      opportunityStage: "appointmentscheduled",
      closeDate: "2023-11-17",
    };

    let data = await apiClient.CRM.updateOpportunity(opportunityId, body);
    expect(data.opportunity).toBeDefined();
    expect(data.opportunity).toHaveProperty("remoteId");
    expect(data.opportunity).toHaveProperty("opportunityName");
    expect(data.opportunity).toHaveProperty("opportunityDescription");
    expect(data.opportunity).toHaveProperty("amount");
    expect(data.opportunity).toHaveProperty("opportunityOwner");
    expect(data.opportunity).toHaveProperty("opportunityAccount");
    expect(data.opportunity).toHaveProperty("opportunityStage");
    expect(data.opportunity).toHaveProperty("opportunityStatus");
    expect(data.opportunity).toHaveProperty("closeDate");
    expect(data.opportunity).toHaveProperty("createdTimestamp");
    expect(data.opportunity).toHaveProperty("updatedTimestamp");
    expect(data.opportunity).toHaveProperty("lastActivityAt");
    expect(data.opportunity).toHaveProperty("id");
  },30000);

  test("should delete a opportunity", async () => {
    const apiClient = new UAPI(apiKey);
    await apiClient.connect(salesforceConnectionId);
    let data = await apiClient.CRM.deleteOpportunity(opportunityId);
    expect(data).toBeDefined();
  },30000);
});
