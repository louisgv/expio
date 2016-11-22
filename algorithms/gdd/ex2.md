# Monogame

## What types of input MonoGame supports.

- Keyboard

  - GetState() -> KeyboardState

- Mouse

  - GetState() -> MouseState

- GamePad

  - GetState() -> GamePadState

## Know how to load Texture2D and SpriteFonts into MonoGame.
```
  var s = Content.Load<typeof(t)>("FILE");
```
## Know how to draw a Texture2D object.
```
spriteBatch.Draw(Texture2D, Rectangle, Color);
```
## Know how to write text with a SpriteFont.
```
spriteBatch.DrawString(SpriteFont, String, Vector2, Color);
```
## Know how to do simple collision detection with bounding boxes.
```
Rectangle.Intersects(Rectangle)
```
## Know how to do simple animation with sprite sheets.

```
var source = new Rectangle(currentFrame.X, currentFrame.Y, frameSize.X, frameSize.Y);
spriteBatch.Draw( Texture2D, Position source, Color.White );

```
# Threads

## Know how a thread differs from a process.

- A program running vs A program state that exists within a process, managed by VM

## Know the thread states.

- Runnable : Not actively running
- Active : Can go to any of the other state

  - Blocked : Waiting for resource
  - Suspended : Waiting for outside event
  - Sleeping : Will sleep at least as long as the time requested
  - Wait : Will stay in pool until a notify or notifyAll is called

- Dead: Complete, cannot restart

## Know how to define a method that will run inside of a thread.

## Know how to create a Thread object.

## Be able to Start a thread.

## Know how to use Sleep, Abort, Interrupt methods to control threads.

## Know how to use Join to wait for a thread to complete.

```
Thread upThread;
Thread prev;
int frame2 = 0;

void LoadContent(){  
  var ts = new ThreadStart (IncFrame2);
  upThread = new Thread (ts);
  upThread.Start ();
}

void IncFrame2(){
  while (true) {
    if (prev != null){
      prev.Join();
    }
    Thread.Sleep (1500);
    frame2++;
  }
}
```

# Recursion

Methods can call themselves Recursive methods need an end point. Recursion appears in many common algorithms.

# Computational Complexity (Big O notation)

## Know what Big O notation represents.

Relative representation of the complexity of an algorithm

## Know the order of the Big O functions and be able identify which one is fastest when comparing them:

Notation   | Example
---------- | --------------------------------------
O(1)       | Array Get by index
O(log n)   | Binary Seach
O(n)       | Search
O(n log n) | mergeSort/heapSort
O(n^2)     | double for
O(n^3)     | triple for
O(2^n)     | recursive
O(n!)      | recursive search (common sub sequence)

# Stacks and Queues

## Know how a stack works. (LIFO)

## Know how a queue works. (FIFO)

## Know how to code a stack using an array or collection as the underlying storage.

Push, Pop, IsEmpty, Peek

## Know how to code a queue using an array or collection as the underlying storage.

Enqueue, Dequeue, IsEmpty, Peek

# Networks

Define a network

Describe the differences between TCP and UDP

Know the following terms:

IP address Packet Routing Port Socket

Be able to create a TCP Client

Create a TcpClient that tries to connect to a server on a port and IP address

Use the Socket from the TcpClient to set up StreamReader, StreamWriter

Send request, use Flush() to force it to go out

## Receive response

Close() Socket to end communications

Be able to create a single threaded TCP server

Use a TcpListener to listen for a client connection

Use an infinite loop to handle client communication

Use the TcpListener's AcceptSocket method to get a Socket.

Use the Socket with StreamReader/StreamWriter to connect to server

Receive request from client, send response

Use Flush() method to send data over the network

Close() socket to terminate connection

Be able to create a multithreaded TCP server

Use a TcpListener to listen for a client connection on a given port

Use an infinite loop to handle client communication

Use the TcpListener's AcceptSocket method to get a Socket.

Pass Socket to separate class to handle client communication

Create a thread to run method that communicates with client

Start the thread

Worker class

Gets the Socket from the main and saves it in an attribute.

Have a method that can be run in a thread

Creates StreamReader/StreamWriter

Get client request and formulate response

Send response, use Flush to force it out

Close the Socket to close out the connection
