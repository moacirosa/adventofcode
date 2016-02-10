<?php

$secretKey = 'bgvyzdsv';
$adventCoinWasNotFound = true;
$currentInteger = 0;

while ($adventCoinWasNotFound) {

  $target = $secretKey . $currentInteger;
  $md5 = md5($target);

  $md5HashPrefix = substr($md5, 0, 5);

  echo $md5 . "\n";

  if ($md5HashPrefix === '00000') {

    printf("===================\n");
    printf('The answer is "%s" which has "%s" as md5 hash', $target, $md5);
    printf("\n");

    $adventCoinWasNotFound = false;
  }

  $currentInteger++;
}

# docker run -it --rm --name="adventofcode4" -v $(pwd):/source php /bin/bash
