/*
    ** Manipulação de dados **

    Extrair extensão do nome do arquivo
    A maneira rápida e curta de extrair a extensão do nome do arquivo em JavaScript será:
*/

function get_extension(filename) {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}

//Funciona corretamente com nomes sem extensão (por exemplo, meuarquivo ) ou começando com . ponto (por ex . htaccess ):

get_extension('') // ""
get_extension('name') // ""
get_extension('name.txt') // "txt"
get_extension('.htpasswd') // ""
get_extension('name.with.many.dots.myext') // "myext"


// A solução a seguir pode extrair extensões de arquivo do caminho completo:

function get_extension(path) {
    var basename = path.split(/[\\/]/).pop(),   // extrai o nome do arquivo do caminho completo
                                                // (suporta separadores `\\` e `/`)
    pos = basename.lastIndexOf('.');            // obtém a última posição de `.`
    if (basename === '' || pos < 1)             // se o nome do arquivo estiver vazio ou ...
        return "";                              // `.` não encontrado (-1) ou vem primeiro (0)
    return basename.slice(pos + 1);             // extrai a extensão ignorando `.`
}

get_extension('/path/to/file.ext'); // "ext"