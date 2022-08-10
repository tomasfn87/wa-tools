import fs from 'fs'
import colors from 'colors'

import remove_function_expression from './remove_fe.js'
import remove_quote_outside_double_curly_brackets from './remove_quote_outside_double_curly_brackets.js'
import check_file_extension from './check_file_extension.js'


const convert_es6_javascript_to_gtmscript = (input_file, output_file) => {
  fs.readFile(input_file, 'utf-8', (err, data) => {
    err && console.error(err)
    if (!data) {
      return
    }
    console.log(' - Antes da limpeza:\n' + data)
    let filtered_data = remove_function_expression(data, true)
    filtered_data = remove_quote_outside_double_curly_brackets(filtered_data, true)
    console.log('\n - Depois da limpeza:\n' + filtered_data)
    fs.writeFile(output_file, filtered_data, (err) => {
      err && console.error(err)
      if (data != filtered_data) {
        console.log('Função convertida para GTM Script com sucesso'.green+' \(salvo em: '+`${output_file}`.yellow+'\)')
      } else {
        console.log('Função já se encontra no padrão do GTM Script'.brightBlue+' \(salvo em: '+`${output_file}`.yellow+'\)')
      }
      return
    })
  })
}

let inputs = process.argv
if (inputs.length < 3) {
  console.error('ERRO:'.red+' é necessário passar um parâmetro: o caminho do arquivo de origem.\n  -->  O resultado será salvo na mesma pasta, porém com extensão ".gtm.js".')
} else {
  const in_file = inputs[2]
  if (!check_file_extension(in_file, 'js')) {
    console.error('ERRO:'.red+' o arquivo de entrada deve ter extensão .js.')
  } else {
    const out_file = in_file.replace('.js', '.gtm.js')
    convert_es6_javascript_to_gtmscript(in_file, out_file)
  }
}
