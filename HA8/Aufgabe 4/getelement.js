


<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
 var list = []
    tagName = tagName.toUpperCase()

    function deepSearch(node) {
      node.childNodes.forEach(e=>{
        if (e.nodeType == document.ELEMENT_NODE) { //Check if child is a tag
          if (e.nodeName == tagName)
            list.push(e);
          deepSearch(e); // check nested tags
        }
      })
    }

    deepSearch(node);
    return list;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>

