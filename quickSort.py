class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        # first grab a pivot
        # split left and right sides of the middle of list
        # pick piviots going down, on the way back up the recursion stack, compare and sort
        
        if len(nums) <= 1:
            return nums
        pivotIdx = len(nums) // 2
        pivot = nums[pivotIdx]
        
        left = []
        right = []
        
        for x in range(0, len(nums)):
            if x == pivotIdx:
                continue
            elif nums[x] > pivot:
                right.append(nums[x])
            else:
                left.append(nums[x])
        

        left = self.sortArray(left)
        right = self.sortArray(right)
        
        return left + [pivot] + right
        