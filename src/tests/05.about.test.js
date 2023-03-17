import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Teste da Rota About', () => {
  test('Testa se as imagens do Garou Nordeste e da Matilha da Kombi estão dispostos em tela', () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const imgGarouNordeste = screen.getByRole('img', { name: /Garou Nordeste/i });
    const imgMatilhaDaKombi = screen.getByRole('img', { name: /Matilha da Kombi/i });

    expect(imgGarouNordeste).toBeInTheDocument();
    expect(imgMatilhaDaKombi).toBeInTheDocument();  
  });

  test('Verifica se o nome do Garou Nordeste e Matilha da Kombi estão disponíveis em tela', () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const garouNordeste = screen.getByRole('heading', { name: /garou nordeste/i });
    const matilhaDaKombi = screen.getByRole('heading', { name: /matilha da kombi/i });

    expect(garouNordeste).toBeInTheDocument();
    expect(matilhaDaKombi).toBeInTheDocument();  
  });

  // test('Verifica se existem botões de redirecionamento para redes sociais de para cada um dos dois parceiros', () => {
  //   render(<App />, {wrapper: BrowserRouter});
  //   const quemSomos = screen.getByRole('link', { name: /quem somos/i });
  //   userEvent.click(quemSomos);
  // });

  test('Verifica se existem textos descritivos sobre cada um dos grupos', () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const textGarouNordeste = screen.getByTestId('about-garou-nordeste');
    const textMatilhaDaKombi = screen.getByTestId('about-matilha-da-kombi');

    expect(textGarouNordeste).toBeInTheDocument();
    expect(textMatilhaDaKombi).toBeInTheDocument();
  });

  test('Verifica se existe um botão para cada grupo e se ele direciona para a devida página de cada um deles', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const buttonGarouNordeste = screen.getByTestId('button-garouNordeste');
    const buttonKombi = screen.getByTestId('button-kombi');
    const construction = screen.getByRole('heading', { name: /estamos em construção\.\.\./i })

    expect(buttonGarouNordeste).toBeInTheDocument();
    expect(buttonKombi).toBeInTheDocument();

    userEvent.click(buttonGarouNordeste);

    const titleGarou = await screen.findByRole('heading', { name: /garou nordeste/i });

    expect(titleGarou).toBeInTheDocument();
    expect(construction).toBeInTheDocument();

    // userEvent.click(quemSomos);
    // userEvent.click(buttonKombi);

    // const titleKombi = screen.getByRole('heading', { name: /Matilha da Kombi/i });

    // expect(titleKombi).toBeInTheDocument();
    // expect(construction).toBeInTheDocument();
    
  });

  test('Verifica se o rodapé está disposto na tela', () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const imgGarouNordeste = screen.getByRole('img', { name: /logo do garou nordeste/i });

    const imgMatilhaDaKombi = screen.getByRole('img', {  name: /logo da matilha da kombi/i});

    const detailsFooter = screen.getByText(/© 2023 copyright - bruno gabryell cabral da silva & thiago lucas martins da silva/i);

    expect(detailsFooter).toBeInTheDocument();
    expect(imgGarouNordeste).toBeInTheDocument();
    expect(imgMatilhaDaKombi).toBeInTheDocument();
  });
});

describe('Teste de todas as rotas de navegação para a página About', () => {
  test('Verifica se, ao clicar no link "tribos", o usuário é direcionado para a página de Tribos', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const tribos = screen.getByRole('link', { name: /tribos/i });

    userEvent.click(tribos);

    const title = await screen.findByRole('heading', { name: /tribos/i });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se, ao clicar no link "Augúrios", o usuário é direcionado para a página de Augúrios', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const augurios = screen.getByRole('link', { name: /augúrios/i });

    userEvent.click(augurios);

    const title = await screen.findByRole('heading', { name: /augúrios/i });

    expect(title).toBeInTheDocument();
  });
  
  test('Verifica se, ao clicar no link "Raças", o usuário é direcionado para a página de Raças', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const breeds = screen.getByRole('link', { name: /raças/i });

    userEvent.click(breeds);

    const title = await screen.findByRole('heading', { name: /raças/i });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se, ao clicar no link "Quem Somos", o usuário é direcionado para a página de Tribos', async () => {
    render(<App />, {wrapper: BrowserRouter});  
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const title = await screen.findByRole('heading', { name: /quem somos/i });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se, ao clicar no link "Início", o usuário é direcionado para a página de Início', async () => {
    render(<App />, {wrapper: BrowserRouter});
    const quemSomos = screen.getByRole('link', { name: /quem somos/i });
    userEvent.click(quemSomos);

    const inicio = screen.getByRole('link', { name: /início/i });
    userEvent.click(inicio);

    const title = await screen.findByRole('heading', { name: /guia das matilhas/i });

    expect(title).toBeInTheDocument();
  });
});