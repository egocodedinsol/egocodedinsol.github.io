      var w = 500;
      var h = 100;
      var barPadding = 1;

      var dataset = [];
      for (var i = 0; i < 20; i++) {
        var newNumber = Math.round(100 * Math.random());
        dataset.push(newNumber);
      }

      var svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
      
      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x",function(d,i){return i * (w/dataset.length);})
         .attr("y",function(d){return h - d;})
         .attr("width", w / dataset.length - barPadding)
         .attr("height",function(d){return d;})
         .attr("fill", function(d){return "rgb(0,0," + (255 - Math.round(d)) + ")";});

      svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")
         .text(function(d){return d;})
         .attr("x", function(d,i){return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;})
         .attr("y", function(d){return h - d + 14;})
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("text-anchor","middle")
         .attr("fill", "white");


