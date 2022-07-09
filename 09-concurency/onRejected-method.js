checkStock().then(handleSuccess).then(null, handleFailure);
checkStock().then(handleSuccess).catch(handleFailure);
