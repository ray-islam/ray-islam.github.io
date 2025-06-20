---
title: Books
theme: jekyll-theme-chirpy
filename: book.md
image: ""  # This prevents any image from being displayed
--- 

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menubar Example</title>
    <style>
        /* Basic styling for the menubar */
        body {
            font-family: Arial, sans-serif;
        }

        .navbar {
            overflow: hidden;
            background-color: #333;
        }

        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }

        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }

        .navbar a.active {
            background-color: #04AA6D;
            color: white;
        }

        /* Dropdown container */
        .dropdown {
            float: left;
            overflow: hidden;
        }

        .dropdown .dropbtn {
            font-size: 16px;  
            border: none;
            outline: none;
            color: white;
            padding: 14px 20px;
            background-color: inherit;
            font-family: inherit;
            margin: 0;
        }

        .navbar a, .dropdown .dropbtn {
            display: inline-block;
        }

        /* Dropdown content (hidden by default) */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown-content a {
            float: none;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
        }

        .dropdown-content a:hover {
            background-color: #ddd;
        }

        /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown:hover .dropbtn {
            background-color: #ddd;
            color: black;
        }

        /* Book gallery styling */
        .book-gallery {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }

        .book-gallery a {
            text-decoration: none;
        }

        .book-image {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            width: 150px;
            height: auto;
        }

        .book-image:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .book-description {
            margin-top: 40px;
            text-align: left;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .book-description h2 {
            margin-top: 20px;
            color: #333;
        }
    </style>
</head>
<body>

    <div class="navbar">
        <a class="active" href="https://ray-islam.github.io/">Home</a>
        <a href="https://ray-islam.github.io/book.html">Books</a>
        <a href="https://ray-islam.github.io/conference.html">Conferences</a>
        <a href="https://ray-islam.github.io/awardsnrecognitions.html">Awards & Recognitions</a>       
    </div>
     <p> </p>
     <p> </p>
     <p> </p>

 <h3>Explore Books</h3>

<style>
    .book-gallery {
        display: flex;
        gap: 5px; /* Add spacing between books */
    }
    .book-item {
        text-align: center; /* Center align the image and title */
    }
    .book-image {
        height: auto; /* Maintain aspect ratio */
        border-radius: 5px; /* Optional: Rounded corners */
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1); /* Optional: Add shadow */
        transition: transform 0.3s ease; /* Optional: Hover effect */
    }
    .book-image:hover {
        transform: scale(1.1); /* Slight zoom effect on hover */
    }
    /* Specific styles for individual images */
    img.genai-book {
        width: 300px; /* Larger width for GenAI book */
    }
    img.rag-book {
        width: 107px; /* Default size for RAG book */
    }
    img.langchain-book {
        width: 100px; /* Medium size for LangChain book */
    }
    img.satellite-book {
        width: 110px; /* Smaller width for Satellite book */
    }
    .book-title {
     margin-top: 10px; /* Add spacing between image and title */
    font-size: 0.8em; /* Resize font as needed (smaller than 1em) */
    font-weight: normal; /* Remove bold font */
    color: #333; /* Title color */
    }
</style>

<div class="book-gallery">
    <div class="book-item">
        <a href="#GenAI-book">
            <img src="assets/genai.png" alt="Generative AI Book" class="book-image genai-book">
        </a>
        <div class="book-title">Text & Reference</div>
    </div>
    <div class="book-item">
        <a href="#RAG-book">
            <img src="assets/rag.jpg" alt="RAG Book" class="book-image rag-book">
        </a>
        <div class="book-title">eBook</div>
    </div>
    <div class="book-item">
        <a href="#LangChain-book">
            <img src="assets/langchain.jpg" alt="LangChain Book" class="book-image langchain-book">
        </a>
        <div class="book-title">eBook</div>
    </div>
    <div class="book-item">
        <a href="#Satellite-book">
            <img src="assets/satellite1.jpg" alt="Satellite Book" class="book-image satellite-book">
        </a>
        <div class="book-title">eBook</div>
    </div>
</div>


</body>
</html>

<hr>
<h2 id="GenAI-book" style="color: green; font-size: 16px;">
    <a href="https://www.wiley.com/en-us/Generative+AI%2C+Cybersecurity%2C+and+Ethics-p-9781394279265" style="color: green; font-size: 16px;"> 1. Islam, M. R. (2024). Generative AI, Cybersecurity, and Ethics. Wiley, USA. ISBN: 978-1-394-27926-5.</a>
</h2>

<ul style="color: black; font-family: 'Futura', serif; font-size: 16px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
  <strong><em>At its heart, “Generative AI, Cybersecurity, and Ethics” is a call to action. It invites readers to engage with the technology as creators or users but as stewards of its potential.</em></strong> <b>- Forbes</b>
</ul>
<br>

<!-- This section is for adding link to YouTube video -->
<title>Embedded YouTube Video</title>
  <b style="color: black;">Book Introduction – YouTube Video</b>
  <iframe width="320" height="180" 
          src="https://www.youtube.com/embed/ZTrtQ_AAdrA" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
<br>

<ul style="color: black; font-family: 'Futura', serif; font-size: 16px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
<b>Availabile at</b> <br>
<b>
<a href="https://www.wiley.com/en-us/Generative+AI%2C+Cybersecurity%2C+and+Ethics-p-9781394279265">Wiley</a> |
<a href="https://www.amazon.com/-/es/Mohammad-Rubyet-Islam/dp/1394279264">Amazon - USA</a> |
<a href="https://www.barnesandnoble.com/w/generative-ai-cybersecurity-and-ethics-mohammad-rubyet-islam/1145560161">Barnes & Noble</a> |
<a href="https://www.oreilly.com/library/view/generative-ai-cybersecurity/9781394279265/b02.xhtml">O'REILLY</a> |
<a href="https://www.walmart.com/ip/Generative-Ai-Cybersecurity-and-Ethics-Hardcover-9781394279265/5611129734?wmlspartner=wlpa&selectedSellerId=0&adid=222222222275611129734_148689117835_19950570663&wl0=&wl1=g&wl2=c&wl3=654444951729&wl4=pla-2072905014157&wl5=9008126&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=online&wl12=5611129734&veh=sem&gad_source=1&gclid=Cj0KCQjwzby1BhCQARIsAJ_0t5MpTzLZpX3HYziW0slNIxaKbmpr1BeDvhTAjfLZi053GMG66FnsVpwaAvZTEALw_wcB">Walmart</a> |
<a href="https://www.thriftbooks.com/w/generative-ai-cybersecurity-and-ethics_mohammad-rubyet-islam/52953269/?srsltid=AfmBOoo9HRx8qCRBSVpOx-UMbBTGKBP4GEExsGbc9ivq88ggniYuKbZX#edition=71390965&idiq=64375017">thriftbooks</a> |
<a href="https://www.powells.com/book/generative-ai-cybersecurity-and-ethics-9781394279265?srsltid=AfmBOopmOm7c_iJXvr9XNtWASWR8W1BzL7axcTLe7TTfby2iND-QXBrG">POWELL'S City of Books</a> |
<a href="https://www.booktopia.com.au/generative-ai-cybersecurity-and-ethics-mohammad-rubyet-islam/book/9781394279265.html?srsltid=AfmBOop4z1lvodMY2eVFLERYlwula8T2QiXfn2b2vAC6YHbBz_85zlGq">booktopia</a> |
<a href="https://www.booksamillion.com/p/Generative-Ai-Cybersecurity-Ethics/Mohammad-Rubyet-Islam/9781394279265?id=9192235193238">BAM! (Books-a-Million)</a> |
<a href="https://books.google.com/books/about/Generative_AI_Cybersecurity_and_Ethics.html?id=P2iM0AEACAAJ">Google Books</a> |
<a href="https://www.amazon.co.uk/Generative-Cybersecurity-Ethics-Mohammad-Rubyet/dp/1394279264">Amazon - UK</a> |
<a href="https://shopsquareone.com/shop/product/generative-ai-cybersecurity-and-ethics-by-mohammad-rubyet-islam-hardcover-indigo-chapters-indigobooks-67102a">SQUAREONE - Canada</a> |
<a href="https://bayshoreshoppingcentre.com/whatsinstore/product/generative-ai-cybersecurity-and-ethics-by-mohammad-rubyet-islam-hardcover-indigo-chapters-coles-67102a">BAYSHORE-Canada</a> |
<a href="https://www.adlibris.com/fi/sv/bok/generative-ai-cybersecurity-and-ethics-9781394279265">Adlibris-Sweden</a> |
<a href="https://bookline.hu/product/home.action?_v=Islam_Mohammad_Rubyet_Generative_Ai_C&type=200&id=6645717">bookline-Hungary</a> |
<a href="https://imusic.ca/other/9781394279265/2025-generative-ai-cybersecurity-and-ethics?srsltid=AfmBOoqV9kI00ZZbj01SrNeXRdnHLvlgfufxSr1ZLs1ysUHOyUB5rP3U">imusic-Denmark</a> |
<a href="https://product.kyobobook.co.kr/detail/S000213270642">KYOBO Book Center - Japan</a> |
<a href="https://www.jpc.de/jpcng/books/detail/-/art/mohammad-rubyet-islam-generative-ai-cybersecurity-and-ethics/hnum/11868304">JPC - Germany</a> |
<a href="https://www.books.com.tw/products/F01a793309?loc=M_0007_068&srsltid=AfmBOopDLM0ddRDGJSf9rvWh2kS8zOtc9gcYq6Olp_BQyM3_bQyupbOV">Books.com.tw - Taiwan</a><br>
</b>
<br>
    
<ul style="color: black; font-family: 'Futura', serif; font-size: 16px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
<b>About this book:</b>
Generative AI, Cyber Security, and Ethics equips readers with essential skills to navigate the evolving AI and cybersecurity landscape. While GenAI drives advances in threat detection and response, it also introduces challenges like deepfake creation and ethical concerns. This book offers concise insights into AI's dual role in enabling and combating cyber threats, emphasizing responsible development and application. Through real-world examples and accessible chapters, it explores machine learning, data privacy, ethical oversight, and human-centric AI design. It also addresses financial, legal, and regulatory impacts, future challenges like accountability and consent, and the importance of interdisciplinary approaches. A vital resource for professionals, policymakers, students, and AI enthusiasts, this book bridges theory with practice in safeguarding the digital future.
</ul>
<br>

<ul style="color: black; font-family: 'Futura', serif; font-size: 16px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
<b>Endorsements</b>
</ul>

<ul style="color: black; font-family: 'Futura', serif; font-size: 13px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
    “... is an essential guide for students, providing clear explanations and practical insights into the integration of generative AI in cybersecurity...”
<b>- Dr. Peter Sandborn, </b> Professor, Department of Mechanical Engineering, University of Maryland, College Park, MD, USA.
<br>
    <br> 

“... plumbs the depth of Generative AI and ethics through the lens of a technology practitioner and recognized AI academician, energized by the moral conscience of an ethical man and a caring humanitarian...”
<b>- David Pere, </b> (Retired Colonel, United States Marine Corps) CEO & President, Blue Force Cyber Inc. USA.
<br>
    <br> 

“... is a groundbreaking book that delves into three of the most relevant and pressing topics in today's technological landscape...”
<b>-	Dr. Christos P. Beretas, </b> Ph.D,  Head Professor of Cyber Security at Innovative Knowledge Institute, France The 100 Most powerful people in Cyber Security.
<br>
  <br> 
  
“This book ... offers a comprehensive exploration of their interplay in today's digital landscape, and empowers students, educators and practitioners alike...”
<b>-	Dr. Adam Lee,</b> Associate Clinical Professor, Robert H. Smith School of Business, University of Maryland, College Park, MD.
<br>
  <br> 
  
“There are few disciplines that have evolved with greater velocity in the last decade, both for the better and for the worse, than Cybersecurity and Generative AI... the first steps to bring clarity to with this work..." 
<b>-	Dr. Brian Dougherty,</b> Vice President of Engineering, SNAPPT.
<br>
       <br> 
"...this timely and critical book will provide a much-needed guide for those seeking to understand and navigate this new era of intelligence.” 
<b>-	Fiona J McEvoy,</b> AI ethics writer, researcher, speaker, and thought leader | Founder, YouTheData.com | Women in AI Ethics™ – Hall of Fame.
<br>
   <br> 
“...The U.S. White House recognizes the importance, impacts, and inherent risks associated with this perplexing topic. Fortunately, this book will be an essential resource ...”
<b>-	Jared Linder,</b> IT Program Manager for the Export-Import Bank of the United States.
<br>
   <br> 
“...has put together a thoughtful and applicable work that takes a serious look at the complexity present in the intersection...”
<b>-	W. Tod Newman,</b> former Lead of Raytheon's Center for Artificial Intelligence and founder of Santa Cruz River Analytics.
<br>
 <br> 
“Cyber security is not a bolt-on activity or exercise, but an integral and initial component of any system development or modification...”
<b>-	Paul Wells,</b> President & CEO, NETWAR Defense Corporation.
<br>
   <br> 

<hr>

<h2 id="RAG-book" style="color: green; font-size: 16px;">
    <a href="https://www.amazon.com/dp/B0CR6GJGGL" style="color: green; font-size: 18px;">2. Retrieval-Augmented Generation (RAG): Empowering Large Language Models (LLMs)</a>
</h2>

<ul style="color: black; font-family: 'Futura', serif; font-size: 16px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
<b>About this eBook:</b>
This book explores Retrieval-Augmented Generation (RAG), merging neural language models with advanced retrieval systems to revolutionize AI in tasks like question answering and real-time data access. By integrating dynamic data, RAG enhances accuracy, adaptability, and depth, surpassing traditional models like GPT. Designed for AI enthusiasts, researchers, and practitioners, it delves into RAG’s architecture, applications, and potential to tackle challenges like complexity and scalability, heralding a new era in AI.
</ul>

<hr>

<h2 id="LangChain-book" style="color: green; font-size: 16px;">
    <a href="https://www.amazon.com/dp/B0CPJS6WSR" style="color: green; font-size: 18px;">3. LangChain Unveiled: Navigating the Future of LLM</a>
</h2>
<ul style="color: black; font-family: 'Futura', serif; font-size: 16px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
<b>About this eBook:</b>
LangChain Unveiled: Navigating the Future of LLM examines LangChain, an open-source platform for building applications with models like GPT-3 and GPT-4. It highlights LangChain's modular architecture, the innovative LangChain Expression Language (LCEL), and comparisons with tools like Auto-GPT. The book underscores LangChain’s impact on NLP and the importance of ethical and technical refinement.
</ul>

<hr>

<h2 id="Satellite-book" style="color: green; font-size: 16px;">
    <a href="https://www.amazon.com/dp/B0CP8K446P" style="color: green; font-size: 18px;">4. Enhancing Satellite Security: Leveraging GenAI for Advanced Cyber Defense</a>
</h2>

<ul style="color: black; font-family: 'Futura', serif; font-size: 16px; list-style-type: none; margin: 0; padding: 0; text-align: justify;">
<b>About this eBook:</b>
Disconnected satellites face cyber risks, but Generative AI (GenAI) offers a game-changing solution. Acting as a digital guardian, GenAI can autonomously counter threats and protect these orbital assets. This eBook, "Enhancing Satellite Security: Leveraging GenAI for Advanced Cyber Defense," explores how this cutting-edge technology secures satellites against unseen dangers.
</ul>

