
Ext.define("xcp_RootBO",
    {
      "xcpModelType" : "xcp_RootBO",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("cts_test",
    {
      "xcpModelType" : "cts_test",
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/cts_tests"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "is_true",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("dm_folder",
    {
      "xcpModelType" : "dm_folder",
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_folderlist_0",
    {
      "xcpModelType" : "dm_folder",
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest_folder",
        "url" : "application/dm_folders"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("dm_document",
    {
      "xcpModelType" : "dm_document",
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/dm_documents"
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_content_size",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      }, "links" ]
    }
);

Ext.define("xcp_currenttask",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "qitem_id",
        "type" : "string"
      }, {
        "name" : "creation_date",
        "type" : "string"
      }, {
        "name" : "due_date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "performer_address",
        "type" : "string"
      }, {
        "name" : "priority",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "task_subject",
        "type" : "string"
      }, {
        "name" : "queue_name",
        "type" : "string"
      }, {
        "name" : "instructions",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "received_date",
        "type" : "string"
      }, {
        "name" : "received_from",
        "type" : "string"
      }, {
        "name" : "requirements",
        "type" : "string"
      }, {
        "name" : "isdelegable",
        "useNull" : true,
        "type" : "boolean"
      }, {
        "name" : "isrepeatable",
        "useNull" : true,
        "type" : "boolean"
      } ]
    }
);

Ext.define("xcp_taskworkflow",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.WorkflowModel",
      "fields" : [ {
        "name" : "correlation_identifier",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "r_creater_name",
        "type" : "string"
      }, {
        "name" : "r_start_date",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_runtime_state",
        "useNull" : true,
        "type" : "int"
      }, {
        "name" : "supervisor_name",
        "type" : "string"
      }, {
        "name" : "supervisor_address",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ExecutionData",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "currenttask",
        "type" : "xcp_currenttask"
      }, {
        "name" : "taskworkflow",
        "type" : "xcp_taskworkflow"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_fetchcontenttypes",
    {
      "xcpModelType" : "xcp_fetchcontenttypes",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "fetchcontenttypes"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontenttypes_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_queue_list_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "queuelist",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_queue_list",
    {
      "xcpModelType" : "xcp_queue_list",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "queue_list"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_queue_list_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchtypes_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "inputs",
        "type" : "array"
      }, {
        "name" : "inputs_label",
        "type" : "array"
      }, {
        "name" : "outputs_label",
        "type" : "array"
      }, {
        "name" : "outputs",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_fetchtypes",
    {
      "xcpModelType" : "xcp_fetchtypes",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "fetchtypes"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchtypes_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "starts_with_filter",
        "type" : "string"
      }, {
        "name" : "user_group_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_userorgroup_selecti",
    {
      "xcpModelType" : "xcp_userorgroup_selecti",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "userorgroup_selecti"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "dos_extension",
        "type" : "string"
      }, {
        "name" : "format_name",
        "type" : "array"
      }, {
        "name" : "format_description",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_fetchcontentformats",
    {
      "xcpModelType" : "xcp_fetchcontentformats",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "fetchcontentformats"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontentformats_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "port_type",
        "type" : "string"
      }, {
        "name" : "output_activity_names",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_activity_list",
    {
      "xcpModelType" : "xcp_activity_list",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "activity_list"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_user_from_queue_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "user_list",
        "type" : "array"
      }, {
        "name" : "queue_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_process_xcp_user_from_queue",
    {
      "xcpModelType" : "xcp_user_from_queue",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "user_from_queue"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_taskhistory_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "process_instance_id",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "array"
      }, {
        "name" : "date",
        "type" : "array"
      }, {
        "name" : "activity_name",
        "type" : "array"
      }, {
        "name" : "status",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_taskhistory",
    {
      "xcpModelType" : "xcp_taskhistory",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "taskhistory"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.IdLessModel",
      "fields" : [ {
        "name" : "folder_path",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_process_xcp_getfolderid",
    {
      "xcpModelType" : "xcp_getfolderid",
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "type" : "xcp_rest",
        "url" : "application/tasks",
        "extraParams" : {
          "type" : "getfolderid"
        }
      },
      "idProperty" : "id",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_cancel_checkout_dm_document",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null,
        "extraParams" : {
          "type" : "xcp_da_def_cancel_checkout_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "fields" : [ {
        "name" : "id",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_checkout_dm_document",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null,
        "extraParams" : {
          "type" : "xcp_da_def_checkout_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "fields" : [ {
        "name" : "id",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_da_def_download_dm_document",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null,
        "extraParams" : {
          "type" : "xcp_da_def_download_dm_document"
        }
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "fields" : [ {
        "name" : "id",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_fetchcontenttypes",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontenttypes_initiate",
        "extraParams" : {
          "type" : "xcp_fetchcontenttypes_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "content_types",
        "name" : "content_types",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_fetchcontenttypes",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchcontenttypes_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_queue_list",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_queue_list_initiate",
        "extraParams" : {
          "type" : "xcp_queue_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "queuelist",
        "name" : "queuelist",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_queue_list",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_queue_list_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_fetchtypes",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchtypes_initiate",
        "extraParams" : {
          "type" : "xcp_fetchtypes_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "outputs_label",
        "name" : "outputs_label",
        "type" : "string"
      }, {
        "alias" : "outputs",
        "name" : "outputs",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "inputs_label",
        "type" : "array"
      }, {
        "name" : "inputs",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_fetchtypes",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchtypes_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchtypes_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_content_rt_query_outputs",
    {
      "xcpModelType" : "xcp_content_rt_query",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/dm_documents",
        "extraParams" : {
          "type" : "xcp_content_rt_query"
        }
      },
      "fields" : [ {
        "alias" : "object_name",
        "name" : "object_name",
        "type" : "string"
      }, {
        "alias" : "a_content_type",
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "alias" : "r_modify_date",
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "alias" : "r_modifier",
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "alias" : "r_lock_date",
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "alias" : "r_lock_owner",
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "alias" : "r_version_label",
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "alias" : "r_object_id",
        "name" : "id",
        "type" : "string"
      }, {
        "alias" : "r_object_type",
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_folder_rt_query_outputs",
    {
      "xcpModelType" : "xcp_folder_rt_query",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/dm_folders",
        "extraParams" : {
          "type" : "xcp_folder_rt_query"
        }
      },
      "fields" : [ {
        "alias" : "r_lock_owner",
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "alias" : "object_name",
        "name" : "object_name",
        "type" : "string"
      }, {
        "alias" : "r_creator_name",
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "alias" : "r_creation_date",
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "alias" : "r_modifier",
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "alias" : "r_modify_date",
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "alias" : "r_object_type",
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "alias" : "r_object_id",
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_userorgroup_selecti",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_userorgroup_selecti",
        "extraParams" : {
          "type" : "xcp_userorgroup_selecti_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "user_group_name",
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "starts_with_filter",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_userorgroup_selecti",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_userorgroup_selecti_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_fetchcontentformats",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontentformats_initiate",
        "extraParams" : {
          "type" : "xcp_fetchcontentformats_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "format_description",
        "name" : "format_description",
        "type" : "string"
      }, {
        "alias" : "format_name",
        "name" : "format_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "dos_extension",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_fetchcontentformats",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchcontentformats_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontentformats_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_activity_list",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_activity_list_initiate",
        "extraParams" : {
          "type" : "xcp_activity_list_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "output_activity_names",
        "name" : "output_activity_names",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "port_type",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_activity_list",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_activity_list_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_versionHistoryQuery_outputs",
    {
      "xcpModelType" : "dm_document",
      "extend" : "versions_history_model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "versionHistoryQuery"
        }
      },
      "fields" : [ {
        "alias" : "object_name",
        "name" : "object_name",
        "type" : "string"
      }, {
        "alias" : "r_lock_date",
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "alias" : "r_version_label",
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "alias" : "r_modify_date",
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "alias" : "r_object_type",
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "alias" : "r_modifier",
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "alias" : "id",
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_networklocation_selecti_ds_outputs",
    {
      "xcpModelType" : "dm_document",
      "extend" : "network_location_model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/networkLocations",
        "extraParams" : {
          "type" : "xcp_networklocation_selecti_ds"
        }
      },
      "fields" : [ {
        "alias" : "location_id",
        "name" : "location_id",
        "type" : "string"
      }, {
        "alias" : "location_name",
        "name" : "location_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_attachment_viewer_ds_outputs",
    {
      "xcpModelType" : "attachment_viewer_ds",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/dm_documents",
        "extraParams" : {
          "type" : "xcp_attachment_viewer_ds"
        }
      },
      "fields" : [ {
        "alias" : "id",
        "name" : "id",
        "type" : "string"
      }, {
        "alias" : "object_name",
        "name" : "object_name",
        "type" : "string"
      }, {
        "alias" : "a_content_type",
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_ds_collection_content_templates_outputs",
    {
      "xcpModelType" : "xcp_repository",
      "extend" : "xcp.data.ContentTemplateModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents",
        "extraParams" : {
          "type" : "xcp_ds_collection_content_templates"
        }
      },
      "fields" : [ {
        "alias" : "id",
        "name" : "id",
        "type" : "string"
      }, {
        "alias" : "object_name",
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_ds_collection_templates_formats_outputs",
    {
      "xcpModelType" : "xcp_repository",
      "extend" : "xcp.data.ContentTemplateFormatsModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents",
        "extraParams" : {
          "type" : "xcp_ds_collection_templates_formats"
        }
      },
      "fields" : [ {
        "alias" : "a_content_type",
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "alias" : "description",
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_ds_user_roles_outputs",
    {
      "xcpModelType" : "xcp_member",
      "extend" : "user_role_model",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents",
        "extraParams" : {
          "type" : "xcp_ds_user_roles"
        }
      },
      "fields" : [ {
        "alias" : "name",
        "name" : "name",
        "type" : "string"
      }, {
        "alias" : "label",
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_user_from_queue",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_user_from_queue_initiate",
        "extraParams" : {
          "type" : "xcp_user_from_queue_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "user_list",
        "name" : "user_list",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_user_from_queue",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_user_from_queue_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_folderQuery_outputs",
    {
      "xcpModelType" : "folderQuery",
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject",
        "extraParams" : {
          "type" : "folderQuery"
        }
      },
      "linkrel" : "http://identifiers.emc.com/linkrel/objects",
      "fields" : [ {
        "alias" : "r_lock_owner",
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "alias" : "object_name",
        "name" : "object_name",
        "type" : "string"
      }, {
        "alias" : "r_creator_name",
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "alias" : "r_creation_date",
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "alias" : "r_modifier",
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "alias" : "r_modify_date",
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "alias" : "r_object_type",
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "alias" : "icon",
        "name" : "icon",
        "type" : "string"
      }, {
        "alias" : "id",
        "name" : "id",
        "type" : "string"
      }, {
        "alias" : "r_lock_date",
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "alias" : "r_link_cnt",
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "alias" : "a_content_type",
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_taskhistory",
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_taskhistory_initiate",
        "extraParams" : {
          "type" : "xcp_taskhistory_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "alias" : "activity_name",
        "name" : "activity_name",
        "type" : "string"
      }, {
        "alias" : "date",
        "name" : "date",
        "type" : "string"
      }, {
        "alias" : "performer",
        "name" : "performer",
        "type" : "string"
      }, {
        "alias" : "status",
        "name" : "status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "process_instance_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_taskhistory",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_taskhistory_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_outputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_outputs",
    {
      "xcpModelType" : "xcp_getfolderid",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_getfolderid_initiate",
        "extraParams" : {
          "type" : "xcp_getfolderid_initiate_staless_ds"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_initiate_staless_ds_outputs_processVariables"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "effectivePermissions",
        "type" : "auto"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_inputs_processVariables",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_path",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_inputs",
    {
      "xcpModelType" : "xcp_getfolderid",
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_getfolderid_initiate_staless_dss",
        "extraParams" : {
          "type" : "stateless"
        }
      },
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_default_create_fold",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_types",
        "type" : "array"
      }, {
        "name" : "default_folder_type",
        "type" : "string"
      }, {
        "name" : "default_folder_path",
        "type" : "string"
      }, {
        "name" : "parent_folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_def_inv_af",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_object_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_selector_content",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ ]
    }
);

Ext.define("xcp_default_create_docu",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      }, {
        "name" : "default_content_type",
        "type" : "string"
      }, {
        "name" : "content_formats",
        "type" : "array"
      }, {
        "name" : "default_content_format",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_def_imp_af",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      }, {
        "name" : "default_content_type",
        "type" : "string"
      }, {
        "name" : "content_formats",
        "type" : "array"
      }, {
        "name" : "default_content_format",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_selector_folder",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ ]
    }
);

Ext.define("xcp_attachment_sel",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folderRoot",
        "type" : "string"
      } ]
    }
);

Ext.define("roles",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.RoleModel",
      "proxy" : {
        "reader" : {
          "root" : "items",
          "type" : "xcpjson"
        },
        "type" : "rest",
        "url" : "application/roles"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("role",
    {
      "xcpModelType" : null,
      "extend" : "xcp.data.RoleModel",
      "proxy" : {
        "reader" : {
          "type" : "json"
        },
        "type" : "rest",
        "url" : "application/role"
      },
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.UserPreferences",
    {
      "xcpModelType" : "xcp_preference",
      "extend" : "xcp.data.PreferencesModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/currentUser/preferences",
        "extraParams" : {
          "fields" : "workflowAutoNextTask,role,delegate_task,delegateToUser,networkLocation"
        }
      },
      "fields" : [ {
        "name" : "workflowAutoNextTask",
        "mapping" : "workflowautonexttask",
        "type" : "string"
      }, {
        "name" : "role",
        "mapping" : "role",
        "type" : "string"
      }, {
        "name" : "delegate_task",
        "mapping" : "delegate_task",
        "type" : "string"
      }, {
        "name" : "delegateToUser",
        "mapping" : "delegatetouser",
        "type" : "string"
      }, {
        "name" : "networkLocation",
        "mapping" : "networklocation",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.SessionVariableModel",
    {
      "extend" : "xcp.data.Model",
      "proxy" : null,
      "cookieEnabledFields" : [ ],
      "fields" : [ ]
    }
);
