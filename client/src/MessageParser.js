// MessageParser starter code in MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("weather")) {
        this.actionProvider.handleweathertLinks();
      }
      if (lowerCaseMessage.includes("covid")) {
        this.actionProvider.handlecovidLinks();
      }
      if (lowerCaseMessage.includes("price")) {
        this.actionProvider.handlepriceLinks();
      }
      if (lowerCaseMessage.includes("news")) {
        this.actionProvider.handlenewsLinks();
      }
    }
  }
  
  export default MessageParser;