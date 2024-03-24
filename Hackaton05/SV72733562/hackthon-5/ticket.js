class Ticket {
  constructor(state, description, phone, payment, paymentPercentage, client) {
    this.state = state;
    this.description = description;
    this.phone = phone;
    this.payment = payment;
    this.paymentPercentage = paymentPercentage;
    this.client = client;
  }
}


module.exports = Ticket ;