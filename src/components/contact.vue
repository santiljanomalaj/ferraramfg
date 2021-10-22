<template>
    <div class="grid-container">
      <div class="grid-x grid-padding-x contact">
<!--
        <div class="large-4 medium-4 cell">
          <h2>Please Note</h2>
          <p>Our facilities and resources currently allow for companies with $3m in yearly sales. </p>
          
          <p>If you are looking for smaller quantities please contact the <a href="https://www.nygcsa.org/" target="_blank">NYGCSA</a> and they will be happy to assist in finding a good fit supplier!</p>
        </div>
-->
        
        <div class="large-6 large-offset-2 cell">
          <h2>Contact Us
            
          </h2>
          <form method="POST" action="https://formspree.io/info@ferraramfg.com">
            <input type="text" name="name" placeholder="Your name">
            <input type="email" name="email" placeholder="Your email">
            <textarea name="message" placeholder="Your message" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        
        
      </div>
    </div>
</template>

<script>
export default {
  name: 'Values',
}
</script>