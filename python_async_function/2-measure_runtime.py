#!/usr/bin/env python3
import asyncio
import time
"""This module contains the 2-measure_runtime function"""
wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
  """
  Measure the total execution time for the imported
  wait_n function and returns the total time
  """
  start_time = time.time()
  await wait_n(n, max_delay)
  end_time = time.time()
  total_time = end_time - start_time

  return total_time / n
