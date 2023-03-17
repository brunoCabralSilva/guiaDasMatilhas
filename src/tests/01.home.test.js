import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Teste da Rota Home', () => {
  test('Verifica se o texto "Guia das Matilhas está disposto na tela', () => {
    render(<App />, {wrapper: BrowserRouter})
  
    const title = screen.getByRole('heading', {
      name: /guia das matilhas/i
    });
  
    expect(title).toBeInTheDocument();
  });

  test('Verifica se o botão de acesso ao menu está disposta na tela', () => {
    render(<App />, {wrapper: BrowserRouter})
    const arrow = screen.getByRole('img', {
      name: /seta para baixo/i
    })
    expect(arrow).toBeInTheDocument();
  });

  test('Verifica se está disposta na tela todas as opções de navegação', () => {
    render(<App />, {wrapper: BrowserRouter});
  
    const inicio = screen.getByRole('link', { name: /início/i });
    const tribos = screen.getByRole('link', { name: /tribos/i });
    const augurios = screen.getByRole('link', { name: /augúrios/i });
    const racas = screen.getByRole('link', { name: /raças/i });
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });

    expect(inicio).toBeInTheDocument();
    expect(tribos).toBeInTheDocument();
    expect(augurios).toBeInTheDocument();
    expect(racas).toBeInTheDocument();
    expect(quemSomos).toBeInTheDocument();
  });

  test('Verifica se o rodapé está disposto na tela', () => {
    render(<App />, {wrapper: BrowserRouter});

    const imgGarouNordeste = screen.getByRole('img', { name: /logo do garou nordeste/i });

    const imgMatilhaDaKombi = screen.getByRole('img', {  name: /logo da matilha da kombi/i});

    const detailsFooter = screen.getByText(/© 2023 copyright - bruno gabryell cabral da silva & thiago lucas martins da silva/i);

    expect(detailsFooter).toBeInTheDocument();
    expect(imgGarouNordeste).toBeInTheDocument();
    expect(imgMatilhaDaKombi).toBeInTheDocument();
  });

  // test('Verifica se, ao clicar no botão de seta para baixo, o usuário é direcionado ao menu', async () => {
  //   render(<App />, {wrapper: BrowserRouter});

  //   const arrow = screen.getByRole('img', {
  //     name: /seta para baixo/i
  //   })

  //   userEvent.click(arrow);

  //   const title = await screen.findByText(/Que Gaia tenha piedade de nós!/i );

  //   expect(title).toBeInTheDocument(title);

  // });

});

describe('Teste de todas as rotas de navegação para a página Home', () => {
  test('Verifica se, ao clicar no link "tribos", o usuário é direcionado para a página de Tribos', async () => {
    render(<App />, {wrapper: BrowserRouter});

    const tribos = screen.getByRole('link', { name: /tribos/i });

    userEvent.click(tribos);

    const title = await screen.findByRole('heading', { name: /tribos/i });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se, ao clicar no link "Augúrios", o usuário é direcionado para a página de Augúrios', async () => {
    render(<App />, {wrapper: BrowserRouter});

    const tribos = screen.getByRole('link', { name: /augúrios/i });

    userEvent.click(tribos);

    const title = await screen.findByRole('heading', { name: /augúrios/i });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se, ao clicar no link "Raças", o usuário é direcionado para a página de Raças', async () => {
    render(<App />, {wrapper: BrowserRouter});

    const tribos = screen.getByRole('link', { name: /raças/i });

    userEvent.click(tribos);

    const title = await screen.findByRole('heading', { name: /raças/i });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se, ao clicar no link "Quem Somos", o usuário é direcionado para a página de Tribos', async () => {
    render(<App />, {wrapper: BrowserRouter});

    const tribos = screen.getByRole('link', { name: /quem somos/i });

    userEvent.click(tribos);

    const title = await screen.findByRole('heading', { name: /quem somos/i });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se, ao clicar no link "Início", o usuário é direcionado para a página de Início', async () => {
    render(<App />, {wrapper: BrowserRouter});

    const tribos = screen.getByRole('link', { name: /tribos/i });
    userEvent.click(tribos);
    const inicio = screen.getByRole('link', { name: /início/i });
    userEvent.click(inicio);

    const title = await screen.findByRole('heading', { name: /guia das matilhas/i });

    expect(title).toBeInTheDocument();
  });
});