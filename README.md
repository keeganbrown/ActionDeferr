ActionDeferr.js
===================

Are tracking or other odd DOM manupulations messing with your animation?
Not anymore! Now, there's actionDeferr.js!

In all seriousness, all this simple library does is add functions to a queue, and then execute those functions when there is no animation taking place. The reason I made it is simple: DOM Manipulation stops all browser paint-events (a very common side-effect of visitor tracking). This library provides an easy, highly compatible way of working around that.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.