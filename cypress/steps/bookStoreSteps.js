import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import bookStoreActions from '../pages/bookStore/bookStoreActions'

Given('que eu acesse o o menu de livros', () => {
  bookStoreActions.accessBookstore()
})

When('preencher o campo de pesquisa com {string}', (search) => {
  bookStoreActions.fillSearchField(search)
})

When('preencher o campo de pesquisa com o nome da editora', () => {
  bookStoreActions.fillSearchField(`O'Reilly Media`)
})

Then('o livro apresentado terá o título {string}', (title) => {
  bookStoreActions.verifyTitleResult(title)
})

Then('o livro apresentado será do autor {string}', (author) => {
  bookStoreActions.verifyAuthorResult(author)
})

Then('o livro apresentado será da editora passada', () => {
  bookStoreActions.verifyPublisherResult(`O'Reilly Media`)
})