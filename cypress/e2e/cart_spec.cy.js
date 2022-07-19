describe('empty spec', () => {
  it('adds an item(Nike) to page and increases its quantity to 2', () => {
    //visit app
    cy.visit('http://localhost:3000/ShoppingCart')
    //click add item button and compare total price
    cy.get('[data-cy="total price"]').invoke('text').then((text1)=>{
      //calculate final value
      const value=parseFloat(text1.slice(2))+100
      //click 'Add Item' button
      cy.findByRole('button', {  name: /add an item/i}).click()
      //grab total price again and match the values
      cy.get('[data-cy="total price"]').invoke('text').then((text2)=>{
        expect(text2).to.eq(`$ ${value}`)
      })
    })
    
    //check if nike is in dom
    cy.findByText(/Nike Air Force 1/i).should('exist')
    //check total price changed
    cy.get('[data-cy="total price"]').contains('$ 267')
    //find plus icon and click it
    cy.get('[data-cy="increase-Nike Air Force 1"]').click()
    // check if quantity increased and total price is 367
    cy.get('[data-cy="qty-Nike Air Force 1"]').contains('2')
    cy.get('[data-cy="total price"]').contains('$ 367')
    //decrease quantity of the item
    cy.get('[data-cy="decrease-Nike Air Force 1"]').click()
    cy.get('[data-cy="qty-Nike Air Force 1"]').contains('1')
    cy.get('[data-cy="total price"]').contains('$ 267')
    //delete it 
    cy.get('[data-cy="delete-Nike Air Force 1"]').click()
    //item shouldn't exist and price should be 167
    cy.findByText(/Nike Air Force 1/i).should('not.exist')
    cy.get('[data-cy="total price"]').contains('$ 167')
  })
  
 
})