---
layout: post
title: data post example
categories: [ 'documentation' , 'annoyances' ]
reviewers: [ 'Cosma Shalizi', 'Aaron Rodgers' ]
figures: 
  - ref: 'line-chart.html'
    type: 'viz'
  - ref: 'using-csv.html' 
    type: 'viz'
  - ref: 'making-a-bar-chart.html'
    type: 'viz'
  - ref: 'using-csv-subplots.html'
    type: 'viz'
published: true
--- 

Zach Holman, who works at GitHub, gave a talk recently which made the airwaves
with the title "Documentation Is Fucking Important." I agree.

### comments ###
In a lab with lots of people, it's incredibly important to keep tabs on how
data was collected, how it was extracted, and how it was analyzed. This is
especially true when you're passing on your data or code to others. I recently
had the "opportunity" to find some errors in the timing of some data that had
been passed to me. Now complaining would be uncouth, since I didn't have to
record the data at all. But not only was the way the data was extracted
undocumented in text, besides a brief README explaining that "it should
already be aligned" (it wasn't), none of the code used to extract the timing
was documented. And in the rare cases where there were comments, sometimes
they were expressly wrong. Several emails later, the issue was resolved, but
not without a PI making personal phone calls. 

### descriptive naming ### 
But the documentation doesn't just entail writing down how you collected each
data set, or what the code means - it's something that should extend to things
like the names of data. I was recently passed two files, entitled
"Michael_Trials1" and "Michael_Trials2" (oddly enough, they were _not_ from an
individual named Michael). A couple emails explained what they meant, but it
shouldn't have to be that way. Whenever you pass data, write a README to go
with it, explaining how the data is organized, what it means, etc. It's easy,
and it leads to less wondering.  

### think of your audience ### 
It might not matter much to you, since you could just go back and mentally run
through everything. An individual's time in a lab is usually 6-7 years at
most, but their data may last much longer than that, particularly as recording
techniques allow more data than a single Ph.D's worth to be collected. 

An analogous situation would be publishing a figure with axes
"Michael_Trials1" and "Michael_Trials2" and then explaining in the caption
what each term meant. You wouldn't do that in a paper - so why do it to a
colleague you see all the time? The biggest motivator could just be selfish:
if you hate helping people, then make your data structures and code extremely
clear. Then you get no pesky emails, no dark looks, no people writing annoying
blog posts.  Answering emails takes time. It's boring. So: document. <span id="lambda">&#x3BB;</span>
