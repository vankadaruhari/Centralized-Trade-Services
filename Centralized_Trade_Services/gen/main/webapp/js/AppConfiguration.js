Ext.namespace("xcp");xcp.appConfiguration = {"modelsConfig":{"application":{"supportMasterPage":true,"unqualifiedName":"application","fragments":["xcp_user_preferences_fr"],"homePageUrlName":"xcp_user_preferences","pages":["signin","xcp_landing_page","cts_page_not_found","master","xcp_user_preferences","cts_application_parameter","cts_manage_app_role"]},"dm_folder":{"supportMasterPage":false,"unqualifiedName":"dm_folder","fragments":["xcp_dm_folder_create"],"homePageUrlName":"xcp_edit_base_folder","pages":["xcp_edit_base_folder","xcp_view_base_folder"]},"role":{"supportMasterPage":false,"homePageUrlName":"cts_role_member","pages":["cts_role_member"]},"dm_document":{"supportMasterPage":false,"unqualifiedName":"dm_document","fragments":["xcp_dm_document_chk","xcp_dm_document_imp"],"homePageUrlName":"xcp_edit_base_content","pages":["xcp_view_base_content","xcp_edit_base_content"]}}};xcp.appContext = {"version":"1.0.0","name":"${_UI_Application_appTitle}","namespace":"cts","description":""};xcp.theme = {path : 'js/resources/css/',supportedThemes: [{name: 'xcp-default',cssFile: 'xcp-default.css',isDefaultTheme: true},{name: 'xcp-accessibility',cssFile: 'xcp-accessibility.css',isAccessibilityTheme: true}]};xcp.defaultPages = {"dm_folder":"xcp_view_base_folder","role":"cts_role_member","dm_document":"xcp_view_base_content"};