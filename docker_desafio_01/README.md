# Dev FullCycle 2.0

## Docker - Desafio 01

Criar uma imagem que imprime uma mensagem inicial utilizando a linguagem Golang.

Requisitos:
- A imagem gerada deverá ter menos que 2Mb.

Recursos-chave:
- Multi-stage builds
- Imagem ```scratch```

---

### Para fazer o build da imagem

```shellscript
docker image build -t suemareverton/codeeducation:docker-desafio-01 .
```

---

### Para enviar a imagem para o Docker Hub

```shellscript
docker image push suemareverton/codeeducation:docker-desafio-01
```

---

### Para executar o container

```shellscript
docker run --rm --name docker-desafio-01 suemareverton/codeeducation:docker-desafio-01
```
