dummy_txt = "Fields of watermelons found on Mars, police say. Authorities say rise of fruit aliens is to blame for glut of outer space watermelons. The FBI declined to comment on reports of watermelons raining down, but confirmed that kiwis have been intercepted. This story is terribly boring."

function copyText() {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById('output').innerHTML.replaceAll('<br>', '\n'));

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}

$(document).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const count = parseInt(urlParams.get('count'))
    const length_type = urlParams.get('length_type')

    if (!count) {
        $('#output').html(dummy_txt)
    }
    else {
        // set input to equal html params
        $(`#length_type option[value='${length_type}']`).prop('selected', true);
        $('#count').val(count)
        
        var output_a = new Array()
        var output_txt = ""

        if (length_type == 'words') {
            var del = ' '
        } else if (length_type == 'sentences') {
            var del = '. '
        } else if (length_type == 'paragraphs') {
            var del = '<br><br>'
        }

        dummy_a = dummy_txt.split(del);
        dummy_length = dummy_a.length
        copies = parseInt(count / dummy_length)
        remainder = count % dummy_length

        for (i = 0; i < copies; i++) {
            output_a.push(...dummy_a)
        }

        output_a.push(...dummy_a.splice(0, remainder))

        output_txt = output_a.join(del)
        output_txt = output_txt.replaceAll('..', '.')

        $('#output').html(output_txt)
    }
})