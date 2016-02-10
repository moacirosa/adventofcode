# Advent of Code

> Advent of Code is a series of small programming puzzles for a variety of skill
levels. They are self-contained and are just as appropriate for an expert who
wants to stay sharp as they are for a beginner who is just learning to code.
Each puzzle calls upon different skills and has two parts that build on a
theme.

In this repo I'll add my solutions to [Advent of Code](http://adventofcode.com/about). I intent to write these solutions in different languages as a good exercise. If you disagree with my solutions or you see potential improvements feel free to open a PR.

## Usage

In order to easily see the code running you'll need `docker` and `docker-compose`. If you don't have it take a look in [official documentation](https://docs.docker.com/compose/).

You can build it before with:

``` shell
  $ docker-compose build
```

But `docker-compose` itself might take care of this. So... Just run `docker-compose` over some **[day][language]** key and you're done:

``` shell
  $ docker-compose up day5js
```

or:

``` shell
  $ docker-compose up day4php
```

If you're not happy with stopped `docker` containers in your `docker ps -a` list just remove them:

``` shell
  $ docker-compose rm
```

## The MIT License (MIT)

Copyright (c) 2016 Moacir Rosa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
