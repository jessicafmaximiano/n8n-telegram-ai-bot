# n8n-telegram-ai-bot
Este projeto é uma solução de automação de atendimento desenvolvida no n8n. Ele utiliza Inteligência Artificial para processar dúvidas relacionadas à Tecnologia de Informação, enviadas via Telegram e registra automaticamente todo o histórico — incluindo data, pergunta do usuário e a resposta da IA — em uma planilha do Google Sheets.

# Funcionalidades
Atendimento Automatizado: Integração entre o bot do Telegram e um modelo de IA para respostas em tempo real.

Registro de Dados: Log automático de interações no Google Sheets para análise e histórico.

Manipulação de Dados: Formatação dinâmica de datas e extração precisa de payloads do Telegram.

Arquitetura Escalável: Fluxo modular no n8n, facilitando futuras adições de funcionalidades.

# Tecnologias Utilizadas
Orquestração: n8n

Mensageria: Telegram Bot API

Banco de Dados: Google Sheets

Autenticação: Google Cloud OAuth2

IA: Grok Chat Model (xAI)

# Estrutura do Repositório
/workflow/: Contém o arquivo .json do fluxo do n8n.

/assets/: Diagramas e prints do fluxo de automação.

# Desafios & Soluções
Autenticação OAuth2: Configuração de Authorized JavaScript Origins e Redirect URIs no Google Cloud Console para garantir a comunicação segura entre o n8n e o Google Sheets.

Mapeamento de Dados: Utilização de expressões JavaScript ($json.result.date) para processar o timestamp do Telegram e transformá-lo em formato legível de data/hora no Google Sheets.

Tratamento de Erros: Configuração de conexões entre nós para garantir que o fluxo de dados não fosse interrompido, tratando respostas undefined com mapeamento direto entre nós.

# Sobre a Desenvolvedora
Estudante do 4º semestre de Análise e Desenvolvimento de Sistemas. Este projeto demonstra minha habilidade em integrar fluxos de trabalho automatizados, serviços em nuvem e Inteligência Artificial para otimizar processos operacionais.
