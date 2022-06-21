---
title: GitHub操作
head:
  - - meta
    - name: keywords
      content: Github操作
---

## actions集成docker buildx及推送示例

```yaml
name: build and push docker image to github package

on:
  push:
    branches: master

jobs:
  path-context:
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout
        uses: actions/checkout@v2
      -
        name: Set up QEMU
        uses: docker/setup-qemu-action@v1
      -
        name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
      -
        name: Login to DockerHub
        uses: docker/login-action@v1 
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      -
        name: Login to Gitlab Container Registry
        uses: docker/login-action@v1 
        with:
          registry: registry.gitlab.com
          username: ${{ secrets.GITLAB_USERNAME }}
          password: ${{ secrets.GITLAB_TOKEN }}
      -
        name: Build and push
        uses: docker/build-push-action@v2
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: registry.gitlab.com/${{ secrets.GITLAB_USERNAME }}/your-repo/your-app:latest
          build-args: |
            arg1=var1
            arg2=var2
      -
        name: Image digest
        run: echo ${{ steps.docker_build.outputs.digest }}
```

