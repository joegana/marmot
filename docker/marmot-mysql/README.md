# marmot-mysql

---

[![docker pull][docker-image]][docker-url]

[docker-image]: https://img.shields.io/docker/pulls/marmotjs/marmot-mysql.svg?style=flat-square
[docker-url]: https://hub.docker.com/r/marmotjs/marmot-mysql/

## production

```bash
$ docker run --name marmot-mysql \
  -v $HOME/marmot_home/mysql_data:/var/lib/mysql \
  -d marmotjs/marmot-mysql
```

---

Just for developer

## build image

```bash
$ cd docker/marmot-mysql
$ docker build --pull -t marmotjs/marmot-mysql .
$ docker push marmotjs/marmot-mysql
```

## development

```bash
$ docker run --name marmot-mysql \
  -p 3306:3306 \
  -v $HOME/marmot_home/mysql_data:/var/lib/mysql \
  marmotjs/marmot-mysql
```
