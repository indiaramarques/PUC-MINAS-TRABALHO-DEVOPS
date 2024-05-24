describe('Adicionar produtos ao carrinho de compras', () => {
    beforeEach(() => {
        cy.visit("https://www.amazon.com.br/");
    })

    it('Cenário 1 - Adicionar 1 produto ao carrinho', () => {
        cy.get('input[id=twotabsearchtextbox]').type('hogwarts legacy PS5')
        cy.get('input[id=nav-search-submit-button]').click()
        cy.get('[class="a-size-base-plus a-color-base a-text-normal"]').first().click()
        cy.get('input[id=add-to-cart-button]').click()
        cy.contains('Adicionado ao carrinho')

    })

    it("Cenário 2 - Adicionar 3 produtos ao carrinho", () => {

        let produto1 = "";
        let produto2 = "";
        let produto3 = "";
        let total = "";

        const parsePrice = (valor) => {
            const valorString = valor
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
                .trim();
            return parseFloat(valorString);
        };
        //Primeiro Produto
        cy.get("input[id=twotabsearchtextbox]").type("Jogos PS4");
        cy.get("input[id=nav-search-submit-button]").click();
        cy.get('[class="a-size-base-plus a-color-base a-text-normal"]').first().click();
        cy.get('#corePrice_feature_div > [data-csa-c-type="widget"] > .a-section').then(($span) => {
            const textValue = $span.text();
            produto1 = parsePrice(textValue);
            cy.get("input[id=add-to-cart-button]").click();
            //Segundo Produto
            cy.get("input[id=twotabsearchtextbox]").type("PS4 Console");
            cy.get("input[id=nav-search-submit-button]").click();
            cy.get('[class="a-size-base-plus a-color-base a-text-normal"]').first().click();
            cy.get('#corePrice_feature_div > [data-csa-c-type="widget"] > .a-section').then(($span) => {
                const textValue = $span.text();
                produto2 = parsePrice(textValue);
                cy.get("input[id=add-to-cart-button]").click();
                //Terceiro Produto
                cy.get("input[id=twotabsearchtextbox]").type("Controle PS4");
                cy.get("input[id=nav-search-submit-button]").click();
                cy.get('[class="a-size-base-plus a-color-base a-text-normal"]').first().click();
                cy.get('#corePrice_feature_div > [data-csa-c-type="widget"] > .a-section').then(($span) => {
                    const textValue = $span.text();
                    produto3 = parsePrice(textValue);
                    cy.get("input[id=add-to-cart-button]").click();
                    //Validar a soma dos 3 produtos
                    cy.get('#sw-subtotal > :nth-child(2) > .a-price > [aria-hidden="true"]').then(($total) => {
                        const textValue = $total.text();
                        total = parsePrice(textValue);
                        const result = produto1 + produto2 + produto3;
                        cy.log(produto1, produto2, produto3);
                        expect(total).to.equal(result);
                    });
                });
            });
        });
    });
});