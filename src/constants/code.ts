export const RECOGNIZE_USER: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    user_id: "USER_ID",  // Optional
    name: "USER_NAME", 
    email: "USER_EMAIL", 
});`;

export const USER_PROPERTIES: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    user_id: "USER_ID",  // Optional
    name: "USER_NAME", 
    email: "USER_EMAIL", 
    
    // Add your custom attributes of the user you want to track

    attributes: {
        created_at: 1384902000, // Add dates as Unix timestamp
        license_expire_at: 1603490400 // Add any other attribute here with value_key:value 
    }
});`;

export const COMPANY_PROPERTIES: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    user_id: "USER_ID",  // Optional
    name: "USER_NAME", 
    email: "USER_EMAIL",
    
    // Company Properties can be added here as you wish

    company: {
        company_id: "COMPANY_ID",    // Your internal ID of the company or project
        name: "COMPANY_NAME",        // The name of the user's project or company 
       
        // Add another property here that you might need to track
        // The format should follow: 
        //  - property_name: property_value
        license_expire_at: 1603490400
    }
});`;

export const UPDATE: string = `customerly.update({...}) // Same value as load`;

export const TRACK_EVENT: string = `customerly.event("subscribed")`;

export const UPDATE_ATTRIBUTE: string = `customerly.attribute("plan", "unlimited")`;

export const LOGOUT: string = `customerly.logout()`;

export const FORCE_LOCALIZATION: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    // Custom options
    autodetectLocale: false
});`;

export const VISIBLE: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    // Custom options
    visible: false
});`;

export const VISIBLE_ON_MOBILE: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    // Custom options
    visibleOnMobile: false
});`;

export const SHOW: string = `customerly.show()`;

export const HIDE: string = `customerly.hide()`;

export const OPEN: string = `customerly.open()`;

export const OPEN_WITH_MESSAGE: string = `customerly.showNewMessage("Hey team, I need an Enterprise plan for my project, can you help?");`;

export const CLOSE: string = `customerly.close()`;

export const CHAT_POSITION: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    // Custom options
    direction: "right | left",
    position: {
        desktop: {
            bottom: 50,
            side: 50
        },
        mobile: {
            bottom: 30,
            side: 30
        }
    }
});`;

export const ACCENT_COLOR: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    // Custom options
    accentColor: "#ffffff"
});`;

export const CONTRAST_COLOR: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    // Custom options
    contrastColor: "#000000"
});`;

export const ATTACHMENTS_AVAILABLE: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    // Custom options
    attachmentsAvailable: false
});`;

export const ON_CHAT_CLOSED: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onChatClosed: function( ) { … }
    }
});`;

export const ON_CHAT_OPENED: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onChatOpened: function( ) { … }
    }
});`;

export const ON_HELP_CENTER_ARTICLE: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onHelpCenterArticleOpened: function( article ) { … }
    }
});`;

export const ON_LEAD_GENERATED: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onLeadGenerated: function( email ) { … }
    }
});`;

export const ON_NEW_CONVERSATION: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onNewConversation: function( message, attachments ) { … }
    }
});`;

export const ON_PRE_CHAT_ASKED: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onProfilingQuestionAsked: function( attribute, value ) { … }
    }
});`;

export const ON_PRE_CHAT_ANSWERED: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onProfilingQuestionAnswered: function( attribute ) { … }
    }
});`;

export const ON_VIDEO_CHAT_ANSWERED: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onRealtimeVideoAnswered: function( ) { … }
    }
});`;

export const ON_VIDEO_CHAT_REJECTED: string = `customerly.load({
    app_id: "YOUR_CUSTOMERLY_ID",
    
    callbacks: {
      onRealtimeVideoRejected: function( ) { … }
    }
});`;
