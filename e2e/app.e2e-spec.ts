import { Angular2CliTodoListPage } from './app.po';

describe('angular2-cli-todo-list App', function() {
  let page: Angular2CliTodoListPage;

  beforeEach(() => {
    page = new Angular2CliTodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
